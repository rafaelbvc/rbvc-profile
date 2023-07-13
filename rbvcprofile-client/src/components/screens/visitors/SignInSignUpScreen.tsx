import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignInSignUpScreen } from "../../../interfaces/ISignInSignUpScreen";
import { formatISODate, timeNow } from "../../../utils/handleTime";
import { IUsers } from "../../../interfaces/IUsers";
import { useAddNewUserMutation } from "./usersApiSlice";

interface IInputData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  preventDefault: () => void;
}

const SignInSignUpScreen = (props: ISignInSignUpScreen) => {
  const { filledData, editVisitor, resetForm, submitForm, formType, newUser } =
    props;

  const [users, setUsers] = useState<IUsers | any>(filledData);
  const [readOrEditInput] = useState<boolean>(editVisitor);
  const [formTypes] = useState<boolean>(formType); //SignUp-false - SettingsScreen-true
  const [formSubmit] = useState<boolean>(submitForm);

  const {
    reset,
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  // , { isLoading, isSucess, isError}
  const [addNewUser, { error }] = useAddNewUserMutation();

  const onSubmit: SubmitHandler<IInputData> = async (data) => {
    if (!data) {
      alert(error);
      return;
    }
    await addNewUser(data);
    reset();
  };

  // const tracking = watch(users);
  // console.log(tracking, "observando o formulario");

  const handleUsers = useCallback(() => {
    if (formType) {
      setUsers(filledData);
    } else {
      setUsers(newUser);
    }
  }, [formType, newUser, filledData]);

  useEffect(() => {
    if (formType) {
      handleSubmit(filledData);
    } else {
      handleSubmit(newUser);
    }
  }, [formSubmit, filledData, newUser, formType, handleSubmit]);

  useEffect(() => {
    reset();
  }, [resetForm, reset]);

  useEffect(() => {
    handleUsers();
  }, [filledData, newUser, handleUsers]);

  //
  return (
    <div className="max-w-[28rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap  md:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mr-1">
            <label htmlFor="FirstNameInput" className="vLabels">
              First Name
            </label>
            <input
              id="FirstNameInput"
              type="text"
              className="vInputs"
              readOnly={readOrEditInput}
              value={formTypes ? users?.firstName : newUser?.firstName}
              {...register("firstName", {
                required: true,
                maxLength: 14,
                minLength: 3,
              })}
            />
          </div>

          <div className="vInputsResponsive w-full mr-1">
            <label htmlFor="PhoneInput" className="vLabels">
              Phone
            </label>
            <input
              id="PhoneInput"
              type="tel"
              className="vInputs"
              readOnly={readOrEditInput}
              value={formTypes ? users?.phone : newUser?.phone}
              {...register("phone", {
                pattern: /([0-9]{2,3})?(([0-9]{2}))([0-9]{4,5})([0-9]{4})/,
                required: true,
              })}
            />
          </div>
        </div>

        <div className="flex flex-col max-w-[28rem] mx-1">
          <label htmlFor="LastNameInput" className="vLabels">
            Last Name
          </label>
          <input
            id="LastNameInput"
            type="text"
            className="vInputs"
            readOnly={readOrEditInput}
            value={formTypes ? users?.lastName : newUser?.lastName}
            {...register("lastName", {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
          />
          <div />
        </div>

        <div className="flex flex-col mx-1 max-w-[28rem]">
          <label htmlFor="EmailInput" className="vLabels">
            E-mail
          </label>
          <input
            id="EmailInput"
            type="text"
            className="vInputs"
            readOnly={readOrEditInput}
            value={formTypes ? users?.email : newUser?.email}
            {...register("email", {
              pattern:
                /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/,
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
          />
        </div>

        <div className="flex justify-between flex-wrap md:flex-nowrap min-w-[20.5rem] max-w-[28rem] mx-1">
          <div className="vInputsResponsive w-full">
            <label htmlFor="PasswordInput" className="vLabels">
              Password
            </label>
            {/* todo unhash if loggeind hash to path */}
            <input
              id="PasswordInput"
              type="text"
              className="vInputs"
              readOnly={readOrEditInput}
              value={formTypes ? users?.password : newUser?.password}
              {...register("password", {
                pattern:
                  /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                required: true,
              })}
            />
          </div>
          <div className="vInputsResponsive w-full">
            <label className="vLabels ">Created At</label>
            <input
              disabled
              value={formatISODate(formTypes ? users?.createdAt : timeNow())}
              readOnly
              className="vInputs text-right   text-dGolden"
            />
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignInSignUpScreen;
