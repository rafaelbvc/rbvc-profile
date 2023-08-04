import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import DefaultBtn from "../buttons/DefaultBtn";
import DragCloseMenu from "./DragCloseMenu";
import { handleVisibility } from "../../utils/visibilityHandler";

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
    <section className="md:mt-[1.6rem]">
      <div className="md:hidden">
        <DragCloseMenu
          changeMaxW={"max-w-[29rem]"}
          textHeader={"profile"}
          onClick={() => setPVisibilityState(" hidden")}
        />
      </div>

      <menu className="flex justify-between">
        <DefaultBtn textBtn="Home" />

        <DefaultBtn
          textBtn="About"
          onClick={() =>
            setAboutVisibilityState(handleVisibility(aboutVisibility))
          }
        />
        <DefaultBtn
          textBtn="Portifolio"
          onClick={() =>
            setPortifolioVisibilityState(handleVisibility(portifolioVisibility))
          }
        />
        <DefaultBtn
          textBtn="Contact"
          onClick={() =>
            setContactVisibilityState(handleVisibility(contactVisibility))
          }
        />
        <DefaultBtn
          textBtn="Hire"
          onClick={() =>
            setHireVisibilityState(handleVisibility(hireVisibility))
          }
        />
      </menu>
    </section>
  );
};

export default ProfileMenu;
