import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignInSignUpScreen } from "../../../interfaces/ISignInSignUpScreen";
import { formatISODate, timeNow } from "../../../utils/handleTime";
import { IUsers } from "../../../interfaces/IUsers";
import {
  selectUserById,
  useAddNewUserMutation,
  // useDeleteUserMutation,
  useUpdateUserMutation,
} from "./usersApiSlice";
import DefaultBtn from "../../buttons/DefaultBtn";
import { handleVisibility } from "../../../utils/visibilityHandler";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import { useSelector } from "react-redux";
import { IInputData } from "../../../interfaces/IInputData";



const SignInSignUpScreen = (props: ISignInSignUpScreen) => {
  const { filledData, resetForm, submitForm, formType, newUser } = props;

  const { setVisitorsMessageVisibilityState, visitorsMessagesVisibility } =
    useVisibilityContext();

  // const [deleteUser] = useDeleteUserMutation();

  const [users, setUsers] = useState<IUsers>(filledData);
  const [formTypes, setFormTypes] = useState<boolean>(formType); //SignUp-false - SettingsScreen-true
  const [formSubmit, setFormSubmit] = useState<boolean>(submitForm);
  const [editUser, setEditUser] = useState<boolean>(false);

  const form = useForm<IInputData>();
  const { reset, register, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  // , { isLoading, isSucess, isError}
  const [addNewUser, { error, isSucess }] = useAddNewUserMutation();
  const [updateUser, { error: errorUpdate, isSucess: sucessUpdate }] =
    useUpdateUserMutation();

  const userIdPath = users?._id;
  const userById = useSelector((state) => selectUserById(state, userIdPath));
  const onSubmit: SubmitHandler<IInputData> = async (data) => {
    if (!data) {
      alert(error);
      return;
    } else if (formType && editUser) {
      const userById: IInputData = await selectUserById(
        "64b76acab91a055eb304ae00"
      );
      await updateUser(data, userById?.id);
    } else if (!formType && !editUser) {
      await addNewUser(data);
      if (isSucess) {
        reset();
      }
    }
  };

  // const handleDelete = async() => {
  //   const userByIds: IInputData = await selectUserById("64b0d584d0a4f8263c629f5f");
  //   console.log(userByIds?.id, "usebyuid");
  //   // await deleteUser(userById?.id);
  // };

  // const tracking = watch();
  // console.log(tracking, errors, "observando o formulario");

  const handleUsers = useCallback(() => {
    if (formType) {
      setUsers(filledData);
    } else {
      setUsers(newUser);
    }
  }, [formType, newUser, filledData]);

  const menuEditSettings = (
    <menu className="flex justify-between my-1">
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
          setFormSubmit(false);
          setEditUser(true);
          setFormTypes(false);
        }}
      />
      <input type="submit" value="upadate" className="vSubmitForm" />
    </menu>
  );

  const renderMenu =
    formTypes || editUser ? (
      menuEditSettings
    ) : (
      <menu className="flex w-content justify-between my-1 mx-6 md:mx-0">
        <DefaultBtn textBtn="clear" />
        <input type="submit" value="create" className="vSubmitForm" />
      </menu>
    );

  // useEffect(() => {
  //   handleDelete()
  // },[handleDelete])

  useEffect(() => {
    if (formType) {
      handleSubmit(filledData);
    } else {
      handleSubmit(newUser);
    }
  }, [formSubmit, filledData, newUser, formType, handleSubmit, userById]);

  useEffect(() => {
    reset();
  }, [resetForm, reset]);

  useEffect(() => {
    handleUsers();
  }, [filledData, newUser, handleUsers]);

  // console.log(userById, "userByid");

  //
  return (
    <div className="max-w-[28rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap  md:flex-nowrap mx-auto">
          <div className="vInputsResponsive w-full mx-1 sm:ml-1">
            <input
              className="hidden"
              type="text"
              id="id"
              value={userById?._id}
              {...register("id")}
            />
            <input
              className="hidden"
              id="active"
              value={userById?.active}
              {...register("active")}
            />
            <label htmlFor="firstName" className="vLabels">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="vInputs"
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
          </div>

          <div className="vInputsResponsive w-full mx-1 sm:mr-1">
            <label htmlFor="phone" className="vLabels">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="vInputs"
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
            value={formTypes ? users?.email : newUser?.email}
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message:
                  "Plase insert a valid email",
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
