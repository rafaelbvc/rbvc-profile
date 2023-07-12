import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DragCloseMenu from "../../menus/DragCloseMenu";
import SignInSignUpScreen from "./SignInSignUpScreen";
import DefaultBtn from "../../buttons/DefaultBtn";

const SignUpScreen = () => {
  const { setSignUpVisibilityState } = useVisibilityContext();

  const dataNewUser = {
    firstName: "Josh",
    lastName: "Momberg",
    phone: "15 9988-8852",
  };

  const renderContent = <SignInSignUpScreen visitorNewData={dataNewUser} />;

  return (
    <>
      <DragCloseMenu
        textHeader="sign up"
        onClick={() => setSignUpVisibilityState(" hidden")}
      />
      {renderContent}
      <menu className="flex flex-row justify-between mx-1">
        <DefaultBtn textBtn="clear" />
        <DefaultBtn textBtn="create" />
      </menu>
      <FooterBar />
    </>
  );
};

export default SignUpScreen;
