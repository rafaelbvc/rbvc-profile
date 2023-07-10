import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import DefaultBtn from "../buttons/DefaultBtn";
import DragCloseMenu from "./DragCloseMenu";
import { handleVisibility } from "../../utils/visibilityHandler";
import { useEffect, useRef } from "react";
import FooterBar from "../FooterBar";

const ProfileMenu = () => {
  const {
    aboutVisibility,
    portifolioVisibility,
    contactVisibility,
    hireVisibility,
    setPVisibilityState,
    setAboutVisibilityState,
    setContactVisibilityState,
    setPortifolioVisibilityState,
    setHireVisibilityState,
  } = useVisibilityContext();

  const ref = useRef(null);

  const handleFocus = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <span ref={ref} />
      <div className="md:hidden">
        <DragCloseMenu
          textHeader={"profile"}
          onClick={() => setPVisibilityState(" hidden")}
        />
      </div>

      <div className="flex justify-between bg-dtBgMainColor rounded">
        <DefaultBtn
          textBtn="Home"
          styleBtn=" self-center "
          onClick={handleFocus}
        />
        <DefaultBtn
          textBtn="About"
          styleBtn=" self-center"
          onClick={() =>
            setAboutVisibilityState(handleVisibility(aboutVisibility))
          }
        />
        <DefaultBtn
          textBtn="Portifolio"
          styleBtn="self-center "
          onClick={() =>
            setPortifolioVisibilityState(handleVisibility(portifolioVisibility))
          }
        />
        <DefaultBtn
          textBtn="Contact"
          styleBtn=" self-center"
          onClick={() =>
            setContactVisibilityState(handleVisibility(contactVisibility))
          }
        />
        <DefaultBtn
          textBtn="Hire"
          styleBtn=" self-center"
          onClick={() =>
            setHireVisibilityState(handleVisibility(hireVisibility))
          }
        />
      </div>
    </>
  );
};

export default ProfileMenu;
