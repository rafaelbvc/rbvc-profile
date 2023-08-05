import { useState } from "react";
import { timeNow } from "../../../utils/handleTime";
import FooterBar from "../../FooterBar";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";

const SignUpScreen = () => {
  const [firstNameInput, setFirsNameInput] = useState<string>("");
  const [lastNameInput, setLastNameInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  // const [formData, setFormData] = useState<IUsers>({
  //   firstName: "",
  //   lastName: "",
  //   password: "",
  //   phone: "",
  //   email: "",
  // });

  // const handleSubmit = () => {
  //   useSubmit();
  // };

  // const validateForm = () => {
  //   const firstNameValidation = new RegExp("/([A-z],{3,14})/")

  // }

  const handleReset = () => {
    setFirsNameInput("");
    setLastNameInput("");
    setPhoneInput("");
    setEmailInput("");
    setPasswordInput("");
  };

  const { setSignUpVisibilityState } = useVisibilityContext();

  return (
    <>
      <DragCloseMenu
        changeMaxW={"max-w-[45rem] mb-[0.3rem]"}
        textHeader="sign up"
        onClick={() => setSignUpVisibilityState(" hidden")}
      />

      <form>
        <div className="flex flex-wrap  sm:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="firstName" className="vLabels">
              First Name
            </label>
            <input
              type="text"
              className="vInputs"
              value={firstNameInput}
              onChange={(e) => setFirsNameInput(e.target.value)}
            />
          </div>
          <div className="vInputsResponsive w-full mx-1 sm:mr-1">
            <label htmlFor="phone" className="vLabels">
              Phone
            </label>
            <input
              type="text"
              className="vInputs"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap  sm:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="lastName" className="vLabels">
              Last Name
            </label>
            <input
              type="text"
              className="vInputs"
              value={lastNameInput}
              onChange={(e) => setLastNameInput(e.target.value)}
            />
            <div />
          </div>
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="email" className="vLabels">
              E-mail
            </label>
            <input
              type="email"
              className="vInputs"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap  sm:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="password" className="vLabels">
              Password
            </label>
            <input
              type="text"
              className="vInputs"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label className="vLabels ">Created At</label>
            <input
              type="text"
              className="vInputs text-right   text-dGolden"
              readOnly
              value={timeNow()}
            />
          </div>
        </div>
      </form>
      <menu className="flex justify-between mx-2">
        <DefaultBtn textBtn="reset" onClick={handleReset} />
        <DefaultBtn textBtn="submit" onClick={() => null} />
      </menu>
      <FooterBar />
    </>
  );
};

export default SignUpScreen;
