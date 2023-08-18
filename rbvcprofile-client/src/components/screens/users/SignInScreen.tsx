import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";

const SignInScreen = () => {
  const { setSignInVisibilityState } = useVisibilityContext();

  // pattern regex  email= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  // regex password    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  // reg /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm

  return (
    <>
      <DragCloseMenu
        textHeader="sign in"
        changeMaxW={"max-w-[32rem]"}
        onClick={() => setSignInVisibilityState(" hidden")}
      />
      <form className="flex flex-col flex-wrap justify-between px-4 pt-2">
        <label htmlFor="visitorEmail" className="vLabels">
          Registered E-mail
        </label>
        <input type="text" className="vInputs" id="emailSignIn" />

        <label htmlFor="visitorPassword" className="vLabels">
          Password
        </label>
        <input type="text" className="vInputs" id="passwordSignIn" />
        <details>
          <summary className={`${"if error TODO"} text-sm mx-1 mt-2`}>
            {"Error Summary"}
          </summary>
          {"kinds"}
        </details>
        <menu className="flex justify-end min-w-[21rem]">
          <DefaultBtn textBtn={"Sign In"} />
        </menu>
        {/* <p className="pMessageErrorInputs">{errors.email?.message}</p>
        <p className="pMessageErrorInputs">{errors.password?.message}</p> */}
      </form>
      <FooterBar />
    </>
  );
};

export default SignInScreen;
