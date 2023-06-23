import React, { useRef, useEffect } from "react";
import useDraggable from "../hooks/useDraggable";

const Public = () => {
  const draggableRef1 = useRef(null);
  const draggableRef2 = useRef(null);
  const {
    registerElement,
    unregisterElement,
    handleMouseDown,
    handleMouseMove,
  } = useDraggable();

  useEffect(() => {
    if (draggableRef1.current) {
      registerElement(draggableRef1.current);
    }
    if (draggableRef2.current) {
      registerElement(draggableRef2.current);
    }

    return () => {
      if (draggableRef1.current) {
        unregisterElement(draggableRef1.current);
      }
      if (draggableRef2.current) {
        unregisterElement(draggableRef2.current);
      }
    };
  }, []);

  return (
    <div className="container flex flex-col h-screen p-3 sm:p-5 lg:p-10">
      <div className="h-10" />
      <div className="containerE" style={{ position: "relative" }}>
        <div
          ref={draggableRef1}
          className="contentE"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onMouseDown={(e) => handleMouseDown(e, 0)}
          onMouseMove={(e) => handleMouseMove(e, 0)}
        >
          <div className="menu">
            <p className="text-dWhite">dragme 1</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
          </div>
        </div>
        <div
          ref={draggableRef2}
          className="contentE"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onMouseDown={(e) => handleMouseDown(e, 1)}
          onMouseMove={(e) => handleMouseMove(e, 1)}
        >
          <div className="menu">
            <p className="text-dWhite">dragme 2</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
            <p>wfgwrfwfwfef</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
