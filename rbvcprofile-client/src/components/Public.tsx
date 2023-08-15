import React, { useRef, useLayoutEffect } from "react";
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
import User from "./screens/users/User";

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

  const profileMenuRef = useRef<HTMLDivElement>(null);
  const visitorMenuRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const portifolioRef = useRef<HTMLDivElement>(null);
  const hireRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const visitorMessagesRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);

  const { registerElement, handleMouseDown } = useDraggable();

  useLayoutEffect(() => {
    const refs = [
      profileMenuRef,
      visitorMenuRef,
      aboutMeRef,
      contactRef,
      portifolioRef,
      hireRef,
      userRef,
      visitorMessagesRef,
      signInRef,
      signUpRef,
    ];

    refs.forEach((ref, index) => {
      const currentRef = ref.current;
      if (currentRef) {
        registerElement(currentRef);
      }
    });
  }, [registerElement]);

  console.log(userVisibility, "user visibility");

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
      <div className="containerE mt-[5rem]">
        <section
          ref={profileMenuRef}
          className={`contentE ${pvisibility} top-[5.5rem] z-10`}
          onMouseDown={(e) => handleMouseDown(e, 0)}
        >
          <ProfileMenu />
        </section>
        <section
          ref={visitorMenuRef}
          className={`contentE ${vvisibility} ${
            pvisibility === " hidden"
              ? "top-[5.5rem] z-10"
              : "top-[8.5rem] z-10"
          }`}
          onMouseDown={(e) => handleMouseDown(e, 1)}
        >
          <VisitorMenu />
        </section>
        <section
          ref={aboutMeRef}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 2)}
        >
          <div className={aboutVisibility}>
            <AboutMeContainer />
          </div>
        </section>
        <section
          ref={contactRef}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 3)}
        >
          <div className={contactVisibility}>
            <ContactScreen />
          </div>
        </section>
        <section
          ref={portifolioRef}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 4)}
        >
          <div className={portifolioVisibility}>
            <PortifolioScreen />
          </div>
        </section>
        <section
          ref={hireRef}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 5)}
        >
          <div className={hireVisibility}>
            <HireScreen />
          </div>
        </section>
        <section
          ref={userRef}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 6)}
        >
          <div className={userVisibility}>
            <User />
          </div>
        </section>
        <section
          ref={visitorMessagesRef}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 7)}
        >
          <div className={visitorsMessagesVisibility}>
            <VisitorMessagesScreen />
          </div>
        </section>
        <section
          ref={signInRef}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 8)}
        >
          <div className={signInVisibility}>
            <SignInScreen />
          </div>
        </section>
        <section
          ref={signUpRef}
          className={`vDraggables`}
          onMouseDown={(e) => handleMouseDown(e, 9)}
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
