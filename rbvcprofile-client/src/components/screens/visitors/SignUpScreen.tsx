import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DragCloseMenu from "../../menus/DragCloseMenu";
import SignInSignUpScreen from "./SignInSignUpScreen";

const SignUpScreen = () => {
  const { setSignUpVisibilityState } = useVisibilityContext();

  const renderContent = <SignInSignUpScreen />;

  return (
    <>
      <DragCloseMenu
        textHeader="sign up"
        onClick={() => setSignUpVisibilityState(" hidden")}
      />
      {renderContent}
      <FooterBar />
    </>
  );
};

export default SignUpScreen;
