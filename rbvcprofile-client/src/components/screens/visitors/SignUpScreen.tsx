import { useForm } from "react-hook-form";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DragCloseMenu from "../../menus/DragCloseMenu";
import SignInSignUpScreen from "./SignInSignUpScreen";
import DefaultBtn from "../../buttons/DefaultBtn";

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
      <menu className="flex flex-row justify-between mx-1">
        <DefaultBtn textBtn="clear" />
        <DefaultBtn textBtn="create"/>
      </menu>
      <FooterBar />
    </>
  );
};

export default SignUpScreen;
