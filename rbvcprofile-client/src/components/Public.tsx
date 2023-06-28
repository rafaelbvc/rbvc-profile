import { useRef, useEffect } from "react";
import useDraggable from "../hooks/useDraggable";
import { useVisibilityContext } from "../contexts/VisibilityContext";
import VisitorMenu from "./menus/VisitorMenu";
import ProfileMenu from "./menus/ProfileMenu";
import AboutMeScreen from "./screens/AboutMeScreen";

const Public = () => {
  const { pvisibility, vvisibility } = useVisibilityContext();

  const draggableRef1 = useRef(null);
  const draggableRef2 = useRef(null);

  const draggableRef3 = useRef(null);

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

    if (draggableRef3.current) {
      registerElement(draggableRef3.current);
    }

    return () => {
      if (draggableRef1.current) {
        unregisterElement(draggableRef1.current);
      }
      if (draggableRef2.current) {
        unregisterElement(draggableRef2.current);
      }

      if (draggableRef3.current) {
        unregisterElement(draggableRef3.current);
      }
    };
  }, [vvisibility, pvisibility]);
  return (
    <div className="container flex flex-col h-screen">
      <div className="h-[5rem]" />
      <div className="containerE box-content h-full">
        <div
          ref={draggableRef1}
          className={`contentE ${pvisibility} top-0`}
          onMouseDown={(e) => handleMouseDown(e, 0)}
          onMouseMove={(e) => handleMouseMove(e, 0)}
        >
          <ProfileMenu />
        </div>
        <div
          ref={draggableRef2}
          className={`contentE ${vvisibility} ${
            pvisibility === " hidden" ? "top-0" : "top-[40px] bottom-0"
          }`}
          onMouseDown={(e) => handleMouseDown(e, 1)}
          onMouseMove={(e) => handleMouseMove(e, 1)}
        >
          <VisitorMenu />
        </div>
        <div
          ref={draggableRef3}
          className="absolute top-80 z-50"
          onMouseDown={(e) => handleMouseDown(e, 2)}
          onMouseMove={(e) => handleMouseMove(e, 2)}
        >
          <AboutMeScreen />
        </div>
      </div>
    </div>
  );
};

export default Public;
