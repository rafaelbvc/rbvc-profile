import React, { useRef, useEffect, useState } from "react";
import useDraggable from "../hooks/useDraggable";

type TVisible = {
  profile: string;
  visitors: string;
};

const Public = () => {
  const [visible, setVisible] = useState<TVisible>({
    profile: "hidden",
    visitors: "hidden",
  });

  const draggableRef1 = useRef(null);
  const draggableRef2 = useRef(null);
  const {
    registerElement,
    unregisterElement,
    handleMouseDown,
    handleMouseMove,
  } = useDraggable();

  const handleProfile = (data: string) => {
    setVisible({ ...visible, profile: data });
  };

  const handleVisitors = (data: string) => {
    setVisible({ ...visible, visitors: data });
  };

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
  console.log(visible.profile, "p - V ", visible.visitors);

  return (
    <div className="container rounded-lg flex flex-col h-screen">
      <div className="h-10" />
      <div className="containerE rounded-lg box-content font-roboto ">
        <div
          ref={draggableRef1}
          className={`contentE ${visible.profile}`}
          onMouseDown={(e) => handleMouseDown(e, 0)}
          onMouseMove={(e) => handleMouseMove(e, 0)}
        >
          <div className="grid-cols-5">
            <p className="text-dWhite mb-1 ">Profile</p>
            <p className="pMenus">About Me</p>
            <p className="pMenus">Portifolio</p>
            <p className="pMenus">Contact</p>
            <p className="pMenus">Hire Me</p>
          </div>
        </div>
        <div
          ref={draggableRef2}
          className={`contentE ${visible.visitors}`}
          onMouseDown={(e) => handleMouseDown(e, 1)}
          onMouseMove={(e) => handleMouseMove(e, 1)}
        >
          <div className="grid-cols-4 ">
            <p className="text-dWhite mb-1 ">Get Started</p>
            <p className="pMenus">Sign In</p>
            <p className="pMenus">Sign Up</p>
            <p className="pMenus">Comments</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          handleProfile("");
          handleVisitors("");
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          handleProfile("hidden");
          handleVisitors("hidden");
        }}
      >
        hide
      </button>
    </div>
  );
};

export default Public;
