import { useEffect, useRef, useState } from "react";
import { timeNow } from "../../../utils/handleTime";
import FooterBar from "../../FooterBar";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import { IUsers } from "../../../interfaces/IUsers";
import { useAddNewUserMutation } from "./usersApiSlice";
import useValidation, { TData } from "../../../hooks/useValidation";

interface IValidation {
  emailError: string;
  passwordError: string;
  phoneError: string;
}

const SignUpScreen = () => {
  const { setSignUpVisibilityState } = useVisibilityContext();
  const [addNewUser] = useAddNewUserMutation();
  // const [disable, setDisable] = useState<boolean>(true);
  // const [isValid, setIsValid] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<IUsers>();
  // {
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   password: "",
  //   email: "",
  // });

  // const messagesError = useValidation(newUser);

  // {
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   password: "",
  //   email: "",
  // });
  // const [errors, setError] = useState({
  //   phoneError: "",
  //   emailError: "",
  //   passwordError: "",
  // });

  const formRef = useRef<any>(null);
  // const errorRef = useRef<any>(null);

  const newUserData = (e) => {
    e.preventDefault();

    const firstName = formRef.current.firstName.value;
    const lastName = formRef.current.lastName.value;
    const phone = formRef.current.phone.value;
    const email = formRef.current.password.value;
    const password = formRef.current.email.value;
    setNewUser({ firstName, lastName, phone, password, email });

    // validation();
  };

  console.log(newUser, "newUser");

  // const handleUserValidation = () => {};

  // const handleErrorRef = (e) => {
  //   e.preventDefault();
  // const phoneM =
  //   "11-12 digit phone numbers with optional group characters and + char at the begining";
  // const emailM = "Invalid email format!";
  // const passwordM =
  //   "Ensure that password is 8 to 64 characters long and contains a mix  of upper and lower case characters, one numeric and one special character";

  // const phoneError = errorRef.current.phoneM.value;

  // const emailError = errorRef.current.emailM.value;
  // const passwordError = errorRef.current.passwordM.value;

  //   setErrorRefData({ phoneError, emailError, passwordError });
  // };

  // console.log(newUser, "sdfsdfsd");

  // const createUser = async () => {
  //   await addNewUser(newUser);
  //   setNewUser({
  //     ...newUser,
  //     firstName: "",
  //     lastName: "",
  //     phone: "",
  //     password: "",
  //     email: "",
  //   });
  // };

  // const handleNewUser = () => {
  //   if (isValid){
  //     createUser();
  //   }

  // };

  // const validation = () => {
  //   // e.preventDefault();
  //   if (
  //     errors.emailError.length < 2 ||
  //     errors.phoneError.length < 2 ||
  //     errors.passwordError.length < 2
  //   ) {
  //     if (!validEmail.test(newUser?.email)) {
  //       console.log("email");
  //       setError({ ...errors, emailError: "Invalid email format!" });
  //     } else {
  //       setError({ ...errors, emailError: " " });
  //     }

  //     if (!validPhone.test(newUser?.phone)) {
  //       console.log("phone");
  //       setError({
  //         ...errors,
  //         phoneError:
  //           "11-12 digit phone numbers with optional group characters and + char at the begining",
  //       });
  //     } else {
  //       setError({ ...errors, phoneError: " " });
  //     }

  //     if (!validPassword.test(newUser?.password)) {
  //       console.log("password");
  //       setError({
  //         ...errors,
  //         passwordError:
  //           "Ensure that password is 8 to 64 characters long and contains a mix  of upper and lower case characters, one numeric and one special character",
  //       });
  //     } else {
  //       setError({ ...errors, passwordError: " " });
  //     }
  //   } else {
  //     setIsValid(true);
  //   }
  // };

  // const renderError = Object.values(errors).map((error) => (
  //   <ErrorMessage
  //     errorM={error}
  //     className={`${error.length < 2 ? " hidden" : " "}`}
  //   />
  // ));

  // console.log(errors);
  // console.log(renderError, "werhehhehedeeahifbh");

  // useEffect(() => {
  //   validation();
  // }, [isValid]);

  // useEffect(() => {
  //   setErrMessage(messagesError);
  // }, [newUser]);

  useEffect(() => {}, [newUser]);

  return (
    <>
      <DragCloseMenu
        changeMaxW={"max-w-[32rem] mb-[0.3rem]"}
        textHeader="sign up"
        onClick={() => setSignUpVisibilityState(" hidden")}
      />

      <form ref={formRef} onSubmit={newUserData}>
        <div className="flex flex-wrap  sm:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="firstName" className="vLabels">
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              className="vInputs"
              value={newUser?.firstName}
              // onChange={(e) =>
              //   setNewUser({ ...newUser, firstName: e.target.value })
              // }
            />
          </div>
          <div className="vInputsResponsive w-full mx-1 sm:mr-1">
            <label htmlFor="phone" className="vLabels">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              className="vInputs"
              value={newUser?.phone}
              // pattern="/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/"
              pattern="tel"

              // onInvalid={() => setIsValid(false)}
              // onChange={(e) =>
              //   setNewUser({ ...newUser, phone: e.target.value })
              // }
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
              name="lastName"
              className="vInputs"
              value={newUser?.lastName}
              // onChange={(e) =>
              //   setNewUser({ ...newUser, lastName: e.target.value })
              // }
            />
          </div>
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="email" className="vLabels">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className="vInputs"
              value={newUser?.email}
              pattern="email"
              // onInvalid={() => setIsValid(false)}
              // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-])$/"
              // onInvalid={() => setIsValid(false)}
              // onChange={(e) =>
              //   setNewUser({ ...newUser, email: e.target.value })
              // }
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
              name="password"
              className="vInputs"
              value={newUser?.password}
              // pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/"
              pattern="password"
              // onInvalid={}
              // onInvalid={() => setIsValid(false)}

              // onChange={(e) =>
              //   setNewUser({ ...newUser, password: e.target.value })
              // }
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
        <menu className="flex justify-between mx-2">
          <DefaultBtn textBtn="reset" />
          <DefaultBtn
            textBtn="submit"
            type="submit"
            // className={`${errors ? " disabled" : " "}`}
          />
        </menu>
      </form>

      <FooterBar />
      {/* {messagesError} */}
      {/* {!isValid ? (
        <ErrorMessage
          errorM={phoneM}
          className={errors.phoneError.length > 2 ? " " : "hidden"}
        />
      ) : null}
      {!isValid ? (
        <ErrorMessage
          errorM={passwordM}
          className={errors.phoneError.length > 2 ? " " : "hidden"}
        />
      ) : null}
      {!isValid ? (
        <ErrorMessage
          errorM={phoneM}
          className={errors.phoneError.length > 2 ? " " : "hidden"}
        />
      ) : null} */}
    </>
  );
};

export default SignUpScreen;
