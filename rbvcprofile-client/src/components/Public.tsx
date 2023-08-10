import { useRef, useLayoutEffect } from "react";
import useDraggable from "../hooks/useDraggable";
import { useVisibilityContext } from "../contexts/useVisibilityContext";
import VisitorMenu from "./menus/VisitorMenu";
import ProfileMenu from "./menus/ProfileMenu";
import ContactScreen from "./screens/ContactScreen";
import PortifolioScreen from "./screens/PortifolioScreen";
import VisitorMessagesScreen from "./screens/messages/VisitorMessagesScreen";
import ShowUser from "./screens/users/ShowUser";
import SignInScreen from "./screens/users/SignInScreen";
import AboutMeContainer from "./AboutMeContainer";
import HireScreen from "./screens/HireScreen";
import SignUpScreen from "./screens/users/SignUpScreen";

const Public = () => {
  const {
    pvisibility,
    vvisibility,
    aboutVisibility,
    contactVisibility,
    portifolioVisibility,
    hireVisibility,
    userVisibility,
    visitorsMessagesVisibility,
    signInVisibility,
    signUpVisibility,
  } = useVisibilityContext();

  const draggableRelative = useRef<HTMLDivElement>(null);
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

  useLayoutEffect(() => {
    if (
      !draggableRef1 ||
      !draggableRef2 ||
      !draggableRef3 ||
      !draggableRef4 ||
      !draggableRef5 ||
      !draggableRef6 ||
      !draggableRef7 ||
      !draggableRef8 ||
      !draggableRef9 ||
      !draggableRef10
    )
      return;

    const draggableRef1Current = draggableRef1.current;
    const draggableRef2Current = draggableRef2.current;
    const draggableRef3Current = draggableRef3.current;
    const draggableRef4Current = draggableRef4.current;
    const draggableRef5Current = draggableRef5.current;
    const draggableRef6Current = draggableRef6.current;
    const draggableRef7Current = draggableRef7.current;
    const draggableRef8Current = draggableRef8.current;
    const draggableRef9Current = draggableRef9.current;
    const draggableRef10Current = draggableRef10.current;

    if (draggableRef1Current) {
      registerElement(draggableRef1Current);
    }
    if (draggableRef2Current) {
      registerElement(draggableRef2Current);
    }
    if (draggableRef3Current) {
      registerElement(draggableRef3Current);
    }
    if (draggableRef4Current) {
      registerElement(draggableRef4Current);
    }
    if (draggableRef5Current) {
      registerElement(draggableRef5Current);
    }
    if (draggableRef6Current) {
      registerElement(draggableRef6Current);
    }
    if (draggableRef7Current) {
      registerElement(draggableRef7Current);
    }
    if (draggableRef8Current) {
      registerElement(draggableRef8Current);
    }
    if (draggableRef9Current) {
      registerElement(draggableRef9Current);
    }
    if (draggableRef10Current) {
      registerElement(draggableRef10Current);
    }
  }, [
    registerElement,
    unregisterElement,
    draggableRef1,
    draggableRef2,
    draggableRef3,
    draggableRef4,
    draggableRef5,
    draggableRef6,
    draggableRef7,
    draggableRef8,
    draggableRef9,
    draggableRef10,
  ]);

  return (
    <div className="flex flex-col h-full bg-dtBgMainColor  sm:relative">
      <p className="pMessageErrorInputs mx-auto mt-[5rem]">
        the page is under construction, some features may not work or are
        offline, sorry for the inconvenience
      </p>
      <p className="hidden md:flex pMessageErrorInputs mx-auto">
        the entire application is designed to be responsive, with breakpoints
        carefully considered to ensure optimal display across various devices.
        I've followed the mobile-first principle in designing the architecture.
      </p>
      <div ref={draggableRelative} className="containerE mt-[5rem]">
        <section
          id="visitorMenu"
          ref={draggableRef1}
          className={`contentE ${pvisibility} top-[5.5rem] z-10`}
          onMouseDown={(e) => handleMouseDown(e, 0)}
          onMouseMove={(e) => handleMouseMove(e, 0)}
        >
          <ProfileMenu />
        </section>
        <section
          ref={draggableRef2}
          className={`contentE ${vvisibility} ${
            pvisibility === " hidden"
              ? "top-[5.5rem] z-10"
              : "top-[8.5rem] z-10"
          }`}
          onMouseDown={(e) => handleMouseDown(e, 1)}
          onMouseMove={(e) => handleMouseMove(e, 1)}
        >
          <VisitorMenu />
        </section>
        <section
          ref={draggableRef3}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 2)}
          onMouseMove={(e) => handleMouseMove(e, 2)}
        >
          <div className={aboutVisibility}>
            <AboutMeContainer />
          </div>
        </section>
        <section
          ref={draggableRef4}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 3)}
          onMouseMove={(e) => handleMouseMove(e, 3)}
        >
          <div className={contactVisibility}>
            <ContactScreen />
          </div>
        </section>
        <section
          ref={draggableRef5}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 4)}
          onMouseMove={(e) => handleMouseMove(e, 4)}
        >
          <div className={`${portifolioVisibility}`}>
            <PortifolioScreen />
          </div>
        </section>
        <section
          ref={draggableRef6}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 5)}
          onMouseMove={(e) => handleMouseMove(e, 5)}
        >
          <div className={hireVisibility}>
            <HireScreen />
          </div>
        </section>
        <section
          ref={draggableRef7}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 6)}
          onMouseMove={(e) => handleMouseMove(e, 6)}
        >
          <div className={userVisibility}>
            <ShowUser />
          </div>
        </section>
        <section
          ref={draggableRef8}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 7)}
          onMouseMove={(e) => handleMouseMove(e, 7)}
        >
          <div className={visitorsMessagesVisibility}>
            <VisitorMessagesScreen />
          </div>
        </section>
        <section
          ref={draggableRef9}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 8)}
          onMouseMove={(e) => handleMouseMove(e, 8)}
        >
          <div className={signInVisibility}>
            <SignInScreen />
          </div>
        </section>
        <section
          ref={draggableRef10}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 9)}
          onMouseMove={(e) => handleMouseMove(e, 9)}
        >
          <div className={signUpVisibility}>
            <SignUpScreen />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Public;

// return () => {
//   if (draggableRef1Current) {
//     unregisterElement(draggableRef1Current);
//   }
//   if (draggableRef2Current) {
//     unregisterElement(draggableRef2Current);
//   }
//   if (draggableRef3Current) {
//     unregisterElement(draggableRef3Current);
//   }
//   if (draggableRef4Current) {
//     unregisterElement(draggableRef4Current);
//   }
//   if (draggableRef5Current) {
//     unregisterElement(draggableRef5Current);
//   }
//   if (draggableRef6Current) {
//     unregisterElement(draggableRef6Current);
//   }
//   if (draggableRef7Current) {
//     unregisterElement(draggableRef7Current);
//   }
//   if (draggableRef8Current) {
//     unregisterElement(draggableRef8Current);
//   }
//   if (draggableRef9Current) {
//     unregisterElement(draggableRef9Current);
//   }
//   if (draggableRef10Current) {
//     unregisterElement(draggableRef10Current);
//   }
// };
