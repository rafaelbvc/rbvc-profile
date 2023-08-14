import { useEffect, useRef } from "react";

const useDraggable = () => {
  const elements = useRef<any[]>([]);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>, index: number) => {
    elements.current[index].isClicked = true;
    elements.current[index].startX = e.clientX;
    elements.current[index].startY = e.clientY;
  };

  const handleMouseUp = (index: number) => {
    elements.current[index].isClicked = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, index: number) => {
    if (!elements.current[index].isClicked) return;

    const deltaX = e.clientX - elements.current[index].startX;
    const deltaY = e.clientY - elements.current[index].startY;

    const nextX = elements.current[index].lastX + deltaX;
    const nextY = elements.current[index].lastY + deltaY;

    elements.current[
      index
    ].element.style.transform = `translate(${nextX}px, ${nextY}px)`;

    elements.current[index].lastX = nextX;
    elements.current[index].lastY = nextY;

    elements.current[index].startX = e.clientX;
    elements.current[index].startY = e.clientY;
  };

  const registerElement = (element: HTMLElement | null) => {
    if (element) {
      elements.current.push({
        element,
        isClicked: false,
        startX: 0,
        startY: 0,
        lastX: element.offsetLeft,
        lastY: element.offsetTop,
      });
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      elements.current.forEach((item, index) => {
        handleMouseUp(index);
      });
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      elements.current.forEach((item, index) => {
        handleMouseMove(e as any, index);
      });
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  return {
    registerElement,
    handleMouseDown,
  };
};

export default useDraggable;
