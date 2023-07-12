import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ISignInSignUpScreen } from "../../../interfaces/ISignInSignUpScreen";
import { formatISODate } from "../../../utils/handleTime";
import DefaultBtn from "../../buttons/DefaultBtn";

const SignInSignUpScreen = (props: ISignInSignUpScreen) => {
  const { filledData, editVisitor, visitorNewData } = props;

  const {
    // reset,
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const [users, setUsers] = useState<any>(filledData);
  const [readOrEditInput, setReadOrEditInput] = useState<boolean>(editVisitor);

  const handleUsers = (userData) => {
    setUsers(userData);
  };

  console.log(editVisitor, "editvisitor");

  useEffect(() => {
    handleUsers(filledData);
  }, [filledData]);

  return (
    <>
      <form onSubmit={handleSubmit(filledData)}>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col">
            <label htmlFor="FirstNameInput" className="vLabels">
              First Name
            </label>
            <input
              id="FirstNameInput"
              type="text"
              className="vInputs"
              readOnly={readOrEditInput}
              value={users?.firstName}
              {...register("firstName", {
                required: true,
                maxLength: 14,
                minLength: 3,
              })}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="PhoneInput" className="vLabels">
              Phone
            </label>
            <input
              id="PhoneInput"
              type="tel"
              className="vInputs"
              readOnly={readOrEditInput}
              value={users?.phone}
              {...register("phone", {
                // pattern: /([0-9]{2,3})?(([0-9]{2}))([0-9]{4,5})([0-9]{4})/,
                required: true,
              })}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="LastNameInput" className="vLabels">
            Last Name
          </label>
          <input
            id="LastNameInput"
            type="text"
            className="vInputs"
            readOnly={readOrEditInput}
            value={users?.lastName}
            {...register("lastName", {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
          />
          <div />
        </div>
        <div className="flex flex-col">
          <label htmlFor="EmailInput" className="vLabels">
            E-mail
          </label>
          <input
            id="EmailInput"
            type="text"
            className="vInputs"
            readOnly={readOrEditInput}
            value={users?.email}
            {...register("email", {
              // pattern:
              //   /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/,
              required: true,
              // maxLength: 20,
              // minLength: 3,
            })}
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col">
            <label htmlFor="PasswordInput" className="vLabels">
              Password
            </label>
            {/* todo unhash if loggeind hash to path */}
            <input
              id="PasswordInput"
              type="text"
              className="vInputs"
              readOnly={readOrEditInput}
              value={users?.password}
              {...register("password", {
                // pattern:
                //   /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="PasswordInput" className="vLabels">
              Created At
            </label>
            <input
              disabled
              value={formatISODate(users?.createdAt)}
              readOnly
              className="vInputs text-right"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SignInSignUpScreen;
