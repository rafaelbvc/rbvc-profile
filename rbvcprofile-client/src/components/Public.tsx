import { useRef, useEffect } from "react";
import useDraggable from "../hooks/useDraggable";
import { useVisibilityContext } from "../contexts/useVisibilityContext";
import VisitorMenu from "./menus/VisitorMenu";
import ProfileMenu from "./menus/ProfileMenu";
import AboutMeScreen from "./screens/AboutMeScreen";
import ContactScreen from "./screens/ContactScreen";
import PortifolioScreen from "./screens/PortifolioScreen";
import VisitorMessages from "./screens/visitors/messages/VisitorMessages";
import HireScreen from "./screens/HireScreen";
import SettingsScreen from "./screens/visitors/SettingsScreen";
import SignInScreen from "./screens/visitors/SignInScreen";
import SignUpScreen from "./screens/visitors/SignUpScreen";

const Public = () => {
  const {
    pvisibility,
    vvisibility,
    aboutVisibility,
    contactVisibility,
    portifolioVisibility,
    hireVisibility,
    settingsVisibility,
    visitorsMessagesVisibility,
    signInVisibility,
    signUpVisibility,
  } = useVisibilityContext();

  // const [visitorScreenKind, setVisitorScreenKind] =
  //   useState<TVisitorScreenKind>();

  const draggableRef1 = useRef<HTMLDivElement>(null);
  const draggableRef2 = useRef<HTMLDivElement>(null);
  const draggableRef3 = useRef<HTMLDivElement>(null);
  const draggableRef4 = useRef<HTMLDivElement>(null);
  const draggableRef5 = useRef<HTMLDivElement>(null);
  const draggableRef6 = useRef<HTMLDivElement>(null);
  const draggableRef7 = useRef<HTMLDivElement>(null);
  const draggableRef8 = useRef<HTMLDivElement>(null);
  const draggableRef9 = useRef<HTMLDivElement>(null);
  const draggableRef10 = useRef<HTMLDivElement>(null);

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
    if (draggableRef8.current) {
      registerElement(draggableRef8.current);
    }
    if (draggableRef9.current) {
      registerElement(draggableRef9.current);
    }
    if (draggableRef10.current) {
      registerElement(draggableRef10.current);
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
      if (draggableRef8.current) {
        unregisterElement(draggableRef8.current);
      }
      if (draggableRef9.current) {
        unregisterElement(draggableRef9.current);
      }
      if (draggableRef10.current) {
        unregisterElement(draggableRef10.current);
      }
    };
  }, []);

  return (
    <div className="container flex flex-col h-full bg-dtBgMainColor  relative">
      <div className="containerE box-content mt-[5rem]">
        <div
          ref={draggableRef1}
          className={`contentE ${pvisibility} top-[5.5rem] `}
          onMouseDown={(e) => handleMouseDown(e, 0)}
          onMouseMove={(e) => handleMouseMove(e, 0)}
        >
          <ProfileMenu />
        </div>
        <div
          ref={draggableRef2}
          className={`contentE ${vvisibility} ${
            pvisibility === " hidden" ? "top-[5.5rem]" : "top-[8.5rem]"
          }`}
          onMouseDown={(e) => handleMouseDown(e, 1)}
          onMouseMove={(e) => handleMouseMove(e, 1)}
        >
          <VisitorMenu />
        </div>
        <div
          ref={draggableRef3}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 2)}
          onMouseMove={(e) => handleMouseMove(e, 2)}
        >
          <div className={aboutVisibility}>
            <AboutMeScreen />
          </div>
        </div>
        <div
          ref={draggableRef4}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 3)}
          onMouseMove={(e) => handleMouseMove(e, 3)}
        >
          <div className={contactVisibility}>
            <ContactScreen />
          </div>
        </div>
        <div
          ref={draggableRef5}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 4)}
          onMouseMove={(e) => handleMouseMove(e, 4)}
        >
          <div className={`${portifolioVisibility}`}>
            <PortifolioScreen />
          </div>
        </div>
        <div
          ref={draggableRef6}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 5)}
          onMouseMove={(e) => handleMouseMove(e, 5)}
        >
          <div className={hireVisibility}>
            <HireScreen />
          </div>
        </div>
        <div
          ref={draggableRef7}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 6)}
          onMouseMove={(e) => handleMouseMove(e, 6)}
        >
          <div className={settingsVisibility}>
            <SettingsScreen />
          </div>
        </div>
        <div
          ref={draggableRef8}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 7)}
          onMouseMove={(e) => handleMouseMove(e, 7)}
        >
          <div className={visitorsMessagesVisibility}>
            <VisitorMessages />
          </div>
        </div>
        <div
          ref={draggableRef9}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 8)}
          onMouseMove={(e) => handleMouseMove(e, 8)}
        >
          <div className={signInVisibility}>
            <SignInScreen />
          </div>
        </div>
        <div
          ref={draggableRef10}
          className={`vDragables`}
          onMouseDown={(e) => handleMouseDown(e, 9)}
          onMouseMove={(e) => handleMouseMove(e, 9)}
        >
          <div className={signUpVisibility}>
            <SignUpScreen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;
