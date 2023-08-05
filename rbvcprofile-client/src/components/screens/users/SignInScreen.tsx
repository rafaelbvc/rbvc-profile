import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";

const SignInScreen = () => {
  const { setSignInVisibilityState } = useVisibilityContext();
  // const form = useForm < IInputUserData > null;
  // const { reset, register, handleSubmit, formState, watch } = form;
  // const { errors } = formState;

  return (
    <>
      <DragCloseMenu
        textHeader="sign in"
        changeMaxW={"max-w-[45rem]"}
        onClick={() => setSignInVisibilityState(" hidden")}
      />
      {/* onSubmit={"handleSubmit()"} */}
      <form className="flex flex-col flex-wrap justify-between px-4 pt-2">
        <label htmlFor="visitorEmail" className="vLabels">
          Registered E-mail
        </label>
        <input
          type="text"
          className="vInputs"
          id="emailSignIn"
          // {...register("email", {
          //   pattern: {
          //     value:
          //       /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          //     message: "Plase insert a valid email",
          //     //change the email registered bringing the information from thebackend
          //   },
          //   required: true,
          //   maxLength: 40,
          //   minLength: 3,
          // })}
        />

        <label htmlFor="visitorPassword" className="vLabels">
          Password
        </label>
        <input
          type="text"
          className="vInputs"
          id="passwordSignIn"
          // {...register("password", {
          //   pattern: {
          //     value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          //     message: `The password length must be greater than or equal to 8,
          //   must contain one or more: uppercase characters,
          //   lowercase characters,
          //   numeric values,
          //   special characters`,
          //   },
          //   required: true,
          // })}
        />
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
