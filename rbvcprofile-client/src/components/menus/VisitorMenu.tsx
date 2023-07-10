import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import DefaultBtn from "../buttons/DefaultBtn";
import DragCloseMenu from "./DragCloseMenu";
import { handleVisibility } from "../../utils/visibilityHandler";
import FooterBar from "../FooterBar";

const VisitorMenu = () => {
  const {
    signInSignUpVisibility,
    visitorsMessagesVisibility,
    signInVisibility,
    setVVisibilityState,
    setSignInSignUpVisibilityState,
    setVisitorsMessageVisibilityState,
    setSignInVisibilityState,
  } = useVisibilityContext();

  return (
    <div className="grid grid-rows-1">
      <DragCloseMenu
        textHeader={"visitors"}
        onClick={() => setVVisibilityState(" hidden")}
        className={`flex flex-col w-full lg:ml-[1rem] xl:ml-[1.2rem] 2xl:ml-[1.54rem] `}
      />
      <div className="flex flex-row justify-between bg-dGrayBGScreens 2xl:pl-[1.5rem]  rounded gap-1 ">
        <DefaultBtn
          textBtn="Settings"
          styleBtn=" self-center"
          onClick={() =>
            setSignInSignUpVisibilityState(
              handleVisibility(signInSignUpVisibility)
            )
          }
        />
        <DefaultBtn
          textBtn="Sign In"
          styleBtn=" self-center"
          onClick={() =>
            setSignInVisibilityState(handleVisibility(signInVisibility))
          }
        />
        <DefaultBtn textBtn="Sign Up" styleBtn=" self-center" />
        <DefaultBtn
          textBtn="Messages"
          styleBtn=" self-center"
          onClick={() =>
            setVisitorsMessageVisibilityState(
              handleVisibility(visitorsMessagesVisibility)
            )
          }
        />
      </div>
    </div>
  );
};

export default VisitorMenu;

// flex flex-wrap
