import { useRef, useEffect } from "react";
import useDraggable from "../hooks/useDraggable";
import { useVisibilityContext } from "../contexts/VisibilityContext";
import VisitorMenu from "./menus/VisitorMenu";
import ProfileMenu from "./menus/ProfileMenu";
import AboutMeScreen from "./screens/AboutMeScreen";
import ContactScreen from "./screens/ContactScreen";
import PortifolioScreen from "./screens/PortifolioScreen";
import HireScreen from "./screens/HireScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Public = () => {
  const {
    pvisibility,
    vvisibility,
    aboutVisibility,
    contactVisibility,
    portifolioVisibility,
    hireVisibility,
    settingsVisibility,
  } = useVisibilityContext();

  const draggableRef1 = useRef(null);
  const draggableRef2 = useRef(null);
  const draggableRef3 = useRef(null);
  const draggableRef4 = useRef(null);
  const draggableRef5 = useRef(null);
  const draggableRef6 = useRef(null);
  const draggableRef7 = useRef(null);

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
    if (draggableRef4.current) {
      registerElement(draggableRef4.current);
    }
    if (draggableRef5.current) {
      registerElement(draggableRef5.current);
    }
    if (draggableRef6.current) {
      registerElement(draggableRef6.current);
    }
    if (draggableRef7.current) {
      registerElement(draggableRef7.current);
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
      if (draggableRef4.current) {
        unregisterElement(draggableRef4.current);
      }
      if (draggableRef5.current) {
        unregisterElement(draggableRef5.current);
      }
      if (draggableRef6.current) {
        unregisterElement(draggableRef6.current);
      }
      if (draggableRef7.current) {
        unregisterElement(draggableRef7.current);
      }
    };
  }, [
    vvisibility,
    pvisibility,
    aboutVisibility,
    contactVisibility,
    hireVisibility,
    settingsVisibility,
  ]);
  return (
    <div className="container flex flex-col h-full bg-dtBgMainColor  relative">
      <div className="h-[5rem]" />
      <div className="containerE box-content">
        <div
          ref={draggableRef1}
          className={`contentE ${pvisibility} top-[5rem] `}
          onMouseDown={(e) => handleMouseDown(e, 0)}
          onMouseMove={(e) => handleMouseMove(e, 0)}
        >
          <ProfileMenu />
        </div>
        <div
          ref={draggableRef2}
          className={`contentE ${vvisibility} ${
            pvisibility === " hidden" ? "top-[7rem]" : "top-[9rem] bottom-0"
          }`}
          onMouseDown={(e) => handleMouseDown(e, 1)}
          onMouseMove={(e) => handleMouseMove(e, 1)}
        >
          <VisitorMenu />
        </div>
        <div
          ref={draggableRef3}
          className="absolute z-20 top-[11rem]"
          onMouseDown={(e) => handleMouseDown(e, 2)}
          onMouseMove={(e) => handleMouseMove(e, 2)}
        >
          <div className={`${aboutVisibility}`}>
            <AboutMeScreen />
          </div>
        </div>
        <div
          ref={draggableRef4}
          className="absolute   z-20  top-[11rem]"
          onMouseDown={(e) => handleMouseDown(e, 3)}
          onMouseMove={(e) => handleMouseMove(e, 3)}
        >
          <div className={`${contactVisibility}`}>
            <ContactScreen />
          </div>
        </div>
        <div
          ref={draggableRef5}
          className="absolute   z-20  top-[11rem]"
          onMouseDown={(e) => handleMouseDown(e, 4)}
          onMouseMove={(e) => handleMouseMove(e, 4)}
        >
          <div className={`${portifolioVisibility}`}>
            <PortifolioScreen />
          </div>
        </div>
        <div
          ref={draggableRef6}
          className="absolute   z-20   top-[11rem]"
          onMouseDown={(e) => handleMouseDown(e, 5)}
          onMouseMove={(e) => handleMouseMove(e, 5)}
        >
          <div className={`${hireVisibility}`}>
            <HireScreen />
          </div>
        </div>
        <div
          ref={draggableRef7}
          className="absolute z-20 top-[16rem]"
          onMouseDown={(e) => handleMouseDown(e, 6)}
          onMouseMove={(e) => handleMouseMove(e, 6)}
        >
          <div className={`${settingsVisibility}`}>
            <SettingsScreen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
