import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignInSignUpScreen } from "../interfaces/ISignInSignUpScreen";

import { IUsers } from "../interfaces/IUsers";
import { useVisibilityContext } from "../contexts/useVisibilityContext";
import { useAddNewUserMutation } from "../components/screens/visitors/usersApiSlice";
import DefaultBtn from "../components/buttons/DefaultBtn";
import { handleVisibility } from "../utils/visibilityHandler";
import { formatISODate, timeNow } from "../utils/handleTime";


interface IInputData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  preventDefault: () => void;
}

// let userPath = {
//   firstNameStr: "",
//   lastNameStr: "",
//   phoneStr: "",
//   emailStr: "",
//   passwordStr: "",
//   // updatedAtStr: "",
// };

const SignInSignUpScreen = (props: ISignInSignUpScreen) => {
  const { filledData, resetForm, submitForm, formType, newUser } = props;

  const { setVisitorsMessageVisibilityState, visitorsMessagesVisibility } =
    useVisibilityContext();

  const [users, setUsers] = useState<IUsers | any>(filledData);
  const [readOrEditInput, setReadOrEditInput] = useState<boolean>(false); //todo // formType
  const [formTypes] = useState<boolean>(formType); //SignUp-false - SettingsScreen-true
  const [formSubmit, setFormSubmit] = useState<boolean>(submitForm);
  const [editUser, setEditUser] = useState<boolean>(false)

  const form = useForm<IInputData>();
  const { reset, register, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  // const {
  //   firstNameStr,
  //   lastNameStr,
  //   phoneStr,
  //   emailStr,
  //   passwordStr,
  //   updatedAtStr,
  // } = filledData;

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

  // const tracking = watch();
  // console.log(tracking, errors, "observando o formulario");

  const handleReadOrEdit = () => {
    if (readOrEditInput) {
      setReadOrEditInput(false);
    } else {
      setReadOrEditInput(true);
    }
  };

  const handleUsers = useCallback(() => {
    if (formType) {
      setUsers(filledData);
    } else {
      setUsers(newUser);
    }
  }, [formType, newUser, filledData]);

  const renderMenu = formTypes || editUser ? (
    <menu className="flex justify-between">
      <DefaultBtn
        textBtn="messages"
        onClick={() =>
          setVisitorsMessageVisibilityState(
            handleVisibility(visitorsMessagesVisibility)
          )
        }
      />
      <DefaultBtn
        textBtn="edit"
        onClick={() => {
          handleReadOrEdit();
          setFormSubmit(false);
          setEditUser(true);
        }}
      />
      <input type="submit" value="upadate" className="vSubmitForm" />
    </menu>
  ) : (
    <menu className="flex w-content justify-between mx-6 md:mx-0">
      <DefaultBtn textBtn="clear" />
      <input type="submit" value="create" className="vSubmitForm" />
    </menu>
  );

  // console.log(readOrEditInput, "read or edit", usersPath.firsName, "usrs");

  useEffect(() => {
    handleReadOrEdit();
  }, [formType]);

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
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <label htmlFor="firstName" className="vLabels">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="vInputs"
              // readOnly={readOrEditInput}
              // onChange={(e) => setUsersPath(e.target.value)}
              // value={
              //   formTypes
              //     ? users?.firstName
              //     : newUser
              //     ? newUser?.firstName
              //     : usersStrr?.firsName
              // }
              value={formTypes ? users?.firstName : newUser?.firstName}
              {...register("firstName", {
                required: {
                  value: true,
                  message: "The field name must contain 3 to 14 characters.",
                },
                maxLength: 14,
                minLength: 3,
              })}
            />
            {/* <p className="text-dGolden">{errors.firstName?.message}</p> */}
          </div>

          <div className="vInputsResponsive w-full mx-1 sm:mr-1">
            <label htmlFor="phone" className="vLabels">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="vInputs"
              // readOnly={readOrEditInput}
              value={formTypes ? users?.phone : newUser?.phone}
              {...register("phone", {
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
                  message: `Possible patterns: +42 555.123.4567, +1-(800)-123-4567, +7 555 1234567,
                  +7(926)1234567, (926) 1234567, +79261234567, 926 1234567, 9261234567, 1234567
                  123-4567, 123-89-01, 495 1234567, 469 123 45 67, 89261234567, 8 (926) 1234567, +5515998888888`,
                },
                required: true,
              })}
            />
          </div>
        </div>

        <div className="flex flex-col max-w-[28rem] mx-1">
          <label htmlFor="lastName" className="vLabels">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className="vInputs"
            // readOnly={readOrEditInput}
            value={formTypes ? users?.lastName : newUser?.lastName}
            {...register("lastName", {
              required: {
                value: true,
                message: "The field last name must contain 3 to 14 characters.",
              },

              maxLength: 20,
              minLength: 3,
            })}
          />
          <div />
        </div>

        <div className="flex flex-col mx-1 max-w-[28rem]">
          <label htmlFor="email" className="vLabels">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="vInputs"
            // readOnly={readOrEditInput}
            value={formTypes ? users?.email : newUser?.email}
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message:
                  "The provided email is out of parttern, or the email is already registered",
                //change the email registered bringing the information from thebackend
              },
              required: true,
              maxLength: 40,
              minLength: 3,
            })}
          />
        </div>

        <div className="flex justify-between flex-wrap md:flex-nowrap min-w-[20.5rem] max-w-[28rem] mx-1">
          <div className="vInputsResponsive w-full">
            <label htmlFor="password" className="vLabels">
              Password
            </label>
            <input
              id="password"
              type="text"
              className="vInputs"
              // readOnly={readOrEditInput}
              value={formTypes ? users?.password : newUser?.password}
              {...register("password", {
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message: `The password length must be greater than or equal to 8,
                must contain one or more: uppercase characters, 
                lowercase characters,
                numeric values,
                special characters`,
                },
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
        {renderMenu}
        <p className="pMessageErrorInputs">{errors.firstName?.message}</p>
        <p className="pMessageErrorInputs">{errors.lastName?.message}</p>
        <p className="pMessageErrorInputs">{errors.phone?.message}</p>
        <p className="pMessageErrorInputs">{errors.email?.message}</p>
        <p className="pMessageErrorInputs">{errors.password?.message}</p>
      </form>
    </div>
  );
};

export default SignInSignUpScreen;
