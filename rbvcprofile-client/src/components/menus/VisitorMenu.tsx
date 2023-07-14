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
    <section>
      <DragCloseMenu
        textHeader={"visitors"}
        onClick={() => setVVisibilityState(" hidden")}
      />
      <menu className="flex w-grow justify-between bg-dGrayBGScreens ">
        <DefaultBtn
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
