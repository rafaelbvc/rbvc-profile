import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DragCloseMenu from "../../menus/DragCloseMenu";
import SignInSignUpScreen from "./SignInSignUpScreen";
import DefaultBtn from "../../buttons/DefaultBtn";
import { useState } from "react";

const SignUpScreen = () => {
  const { setSignUpVisibilityState } = useVisibilityContext();

  const [stateForm, setStateForm] = useState<boolean>(false);
  const [submitForm, setSubmitForm] = useState<boolean>();
  const handleState = () => {
    setStateForm(true);
  };

  const handleSubmit = () => {
    setSubmitForm(true);
  };

  const dataNewUser = {
    firstName: "Josh",
    lastName: "Momberg",
    phone: "15 9988-8852",
  };

  const renderContent = (
    <SignInSignUpScreen visitorNewData={dataNewUser} resetForm={stateForm} />
  );

  return (
    <>
      <DragCloseMenu
        className="mb-1"
        textHeader="sign up"
        onClick={() => setSignUpVisibilityState(" hidden")}
      />
      {renderContent}
      <menu className="flex flex-row justify-between mx-1">
        <DefaultBtn textBtn="clear" onClick={handleState} />
        <DefaultBtn textBtn="create" onClick={handleSubmit} />
      </menu>
      <FooterBar />
    </>
  );
};

export default SignUpScreen;
