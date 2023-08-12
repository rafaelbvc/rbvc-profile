import { useEffect, useRef } from "react";

const useDraggable = () => {
  const elements = useRef([]);

  const handleMouseDown = (e, index: any) => {
    elements.current[index].isClicked = true;
    elements.current[index].startX = e.clientX;
    elements.current[index].startY = e.clientY;
  };

  const handleMouseUp = (index: any) => {
    elements.current[index].isClicked = false;
    elements.current[index].lastX = elements.current[index].element.offsetLeft;
    elements.current[index].lastY = elements.current[index].element.offsetTop;
  };

  const handleMouseMove = (e, index: any) => {
    if (!elements.current[index].isClicked) return;

    const nextX =
      e.clientX -
      elements.current[index].startX +
      elements.current[index].lastX;
    const nextY =
      e.clientY -
      elements.current[index].startY +
      elements.current[index].lastY;

    elements.current[index].element.style.top = `${nextY}px`;
    elements.current[index].element.style.left = `${nextX}px`;
  };

  const registerElement = (element) => {
    elements.current.push({
      element,
      isClicked: false,
      startX: 0,
      startY: 0,
      lastX: 0,
      lastY: 0,
    });
  };

  const unregisterElement = (element) => {
    const index = elements.current.findIndex(
      (item) => item.element === element
    );
    if (index !== -1) {
      elements.current.splice(index, 1);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      elements.current.forEach((item, index) => {
        handleMouseUp(index);
      });
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  return {
    registerElement,
    unregisterElement,
    handleMouseDown,
    handleMouseMove,
  };
};

export default useDraggable;
