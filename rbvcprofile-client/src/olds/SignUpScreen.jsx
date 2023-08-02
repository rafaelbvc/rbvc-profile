import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DragCloseMenu from "../../menus/DragCloseMenu";
import SignInSignUpScreen from "../../../olds/SignInSignUpScreen";
import { IUsers } from "../../../interfaces/IUsers";

const SignUpScreen = () => {
  // const { setSignUpVisibilityState } = useVisibilityContext();

  // const dataNewUser: IUsers = {};

  // const renderContent = (
  //   <SignInSignUpScreen filledData={dataNewUser} formType={false} />
  // );

  return (
    <>
      {/* <DragCloseMenu
        className="mb-1"
        textHeader="sign up"
        onClick={() => setSignUpVisibilityState(" hidden")}
      />
      {renderContent}
      <FooterBar /> */}
    </>
  );
};

export default SignUpScreen;
