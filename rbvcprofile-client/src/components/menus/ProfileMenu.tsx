import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import DefaultBtn from "../buttons/DefaultBtn";
import DragCloseMenu from "./DragCloseMenu";
import { handleVisibility } from "../../utils/visibilityHandler";
import { useRef } from "react";

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



  return (
    <div className="md:mt-6">
      <div className="md:hidden">
        <DragCloseMenu
          textHeader={"profile"}
          onClick={() => setPVisibilityState(" hidden")}
        />
      </div>

      <div className="ml-1 sm:ml-8 md:ml-0 flex justify-between bg-dtBgMainColor rounded">
        <DefaultBtn
          textBtn="Home"
          styleBtn=" self-center "
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
    </div>
  );
};

export default ProfileMenu;
