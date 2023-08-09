import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import DefaultBtn from "../buttons/DefaultBtn";
import DragCloseMenu from "./DragCloseMenu";
import { handleVisibility } from "../../utils/visibilityHandler";

const VisitorMenu = () => {
  const {
    userVisibility,
    visitorsMessagesVisibility,
    signInVisibility,
    signUpVisibility,
    setVVisibilityState,
    setUserVisibilityState,
    setVisitorsMessageVisibilityState,
    setSignInVisibilityState,
    setSignUpVisibilityState,
  } = useVisibilityContext();

  return (
    <section>
      <DragCloseMenu
        changeMaxW={"max-w-[29rem]"}
        textHeader={"visitors"}
        onClick={() => setVVisibilityState(" hidden")}
      />
      <menu className="flex flex-grow justify-around bg-dGrayBGScreens ">
        <DefaultBtn
          styleBtn="ml-[-0.8rem] md:ml-0"
          textBtn="Profile"
          onClick={() =>
            setUserVisibilityState(handleVisibility(userVisibility))
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
