import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import DefaultBtn from "../buttons/DefaultBtn";
import DragCloseMenu from "./DragCloseMenu";
import { handleVisibility } from "../../utils/visibilityHandler";

const VisitorMenu = () => {
  const {
    settingsVisibility,
    visitorsMessagesVisibility,
    signInVisibility,
    signUpVisibility,
    setVVisibilityState,
    setSettingsVisibilityState,
    setVisitorsMessageVisibilityState,
    setSignInVisibilityState,
    setSignUpVisibilityState,
  } = useVisibilityContext();

  return (
    <section className="container flex flex-col max-w-[24.5rem] sm:max-w-none">
      <DragCloseMenu
        textHeader={"visitors"}
        onClick={() => setVVisibilityState(" hidden")}
      />
      <menu className="flex flex-grow justify-around bg-dGrayBGScreens ">
        <DefaultBtn
        styleBtn="ml-[-0.8rem] md:ml-0"
          textBtn="Settings"
          onClick={() =>
            setSettingsVisibilityState(handleVisibility(settingsVisibility))
          }
        />
        <DefaultBtn
          textBtn="Sign In"
          onClick={() =>
            setSignInVisibilityState(handleVisibility(signInVisibility))
          }
        />
        <DefaultBtn
          textBtn="Sign Up"
          onClick={() =>
            setSignUpVisibilityState(handleVisibility(signUpVisibility))
          }
        />
        <DefaultBtn
          textBtn="Messages"
          onClick={() =>
            setVisitorsMessageVisibilityState(
              handleVisibility(visitorsMessagesVisibility)
            )
          }
        />
      </menu>
    </section>
  );
};

export default VisitorMenu;
