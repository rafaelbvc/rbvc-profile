import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DragCloseMenu from "../../menus/DragCloseMenu";
import SignInSignUpScreen from "./SignInSignUpScreen";
import DefaultBtn from "../../buttons/DefaultBtn";
import { useEffect, useState } from "react";
import { IUsers } from "../../../interfaces/IUsers";

const SignUpScreen = () => {
  const { setSignUpVisibilityState } = useVisibilityContext();

  const [stateForm, setStateForm] = useState<boolean>(false);
  const [submitForm, setSubmitForm] = useState<boolean>();

  const handleState = () => {
    setStateForm(true);
  };

  const handleSubmit:any = (b) => {
    if (b) {
      setSubmitForm(false);
    } else {
      setSubmitForm(true);
    }
  };

  const dataNewUser: IUsers = {};

  const renderContent = (
    <SignInSignUpScreen
      filledData={dataNewUser}
      resetForm={stateForm}
      formType={false}
      // submitForm={submitForm}
      submitForm={submitForm}
    />
  );

  console.log(submitForm, "ffff")

  useEffect(() => {
    handleSubmit()
  }, [submitForm])

  return (
    <>
      <DragCloseMenu
        className="mb-1"
        textHeader="sign up"
        onClick={() => setSignUpVisibilityState(" hidden")}
      />
      {renderContent}

      <FooterBar />
    </>
  );
};

export default SignUpScreen;
