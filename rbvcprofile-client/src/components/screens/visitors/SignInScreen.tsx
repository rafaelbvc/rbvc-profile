import { useForm } from "react-hook-form";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import { handleVisibility } from "../../../utils/visibilityHandler";
import FooterBar from "../../FooterBar";
import DragCloseMenu from "../../menus/DragCloseMenu";
import DefaultBtn from "../../buttons/DefaultBtn";

const SignInScreen = () => {
  const { setSignInVisibilityState } = useVisibilityContext();
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <DragCloseMenu
        textHeader="sign in"
        onClick={() => setSignInVisibilityState(" hidden")}
      />
      {/* onSubmit={"handleSubmit()"} */}
      <form className="flex flex-col flex-wrap justify-between">
        <label htmlFor="visitorEmail" className="vLabels">
          Registered E-mail
        </label>
        <input
          type="text"
          className="vInputs"
          required
          id="EmailValidationInput"
          {...register("emailValidation", {
            // pattern:
            //   /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/,
            required: true,
            // maxLength: 20,
            // minLength: 3,
          })}
        />

        <label htmlFor="visitorPassword" className="vLabels">
          Password
        </label>
        <input
          type="text"
          className="vInputs"
          required
          id="PasswordValidationInput"
          {...register("passwordValidation", {
            // pattern:
            //   /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            required: true,
          })}
        />
        <details>
          <summary
            className={`${"if error TODO"} text-sm font-poppins mx-1 mt-2`}
          >
            {"Error Summary"}
          </summary>
          {"kinds"}
        </details>
        <menu className="flex justify-end min-w-[21rem]">
          <DefaultBtn textBtn={"Sign In"} />
        </menu>
      </form>
      <FooterBar />
    </>
  );
};

export default SignInScreen;
