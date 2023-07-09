import { useEffect, useState } from "react";
import DragCloseMenu from "./menus/DragCloseMenu";
import { useVisibilityContext } from "../contexts/useVisibilityContext";
import StatusIcon from "./svg/statusIcon";
import FooterBar from "./FooterBar";
import DefaultBtn from "./buttons/DefaultBtn";
import { useForm } from "react-hook-form";
import { ISignInSignUpScreen } from "../interfaces/ISignInSignUpScreen";


const SignInSignUpScreen = (props: ISignInSignUpScreen) => {
  const {
    statusColor,
    handleActiveStatus,
    activeStatus,
    loadingState,
    handleSubmitF,
    users,
    filledData,
  } = props;

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { setSignInSignUpVisibilityState, signInSignUpVisibility } =
    useVisibilityContext();

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [dateNow, setDateNow] = useState("");
  const [readOrEditInput, setReadOrEditInput] = useState(false); //editbuton

  const handleTime = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const isosDate = today.toISOString().slice(0, 10);
    setDateNow(isosDate);
  };

  useEffect(() => {
    handleTime();
  }, []);

  return (
    <>
      <DragCloseMenu
        textHeader="user settings"
        onClick={() => setSignInSignUpVisibilityState(" hidden")}
      />
      <div className="flex flex-row justify-between   mt-1 px-1">
        <button onClick={()=> handleActiveStatus} className="flex">
          <StatusIcon width="1.5rem" fillColor={statusColor} />
          <p className="text-sm self-center">
            &nbsp; {activeStatus ? "INACTIVATE" : "ACTIVATE"}
          </p>
        </button>
        <div className="flex ">
          <p className="font-poppins text-sm self-center">STATUS: &nbsp;</p>
          <p
            className={`font-poppins text-sm self-center text-left ${
              activeStatus ? " text-sActive" : "text-sInactive"
            }`}
          >{`${activeStatus ? "ACTIVE" : "INACTIVE"}`}</p>
        </div>

        <p className="text-dGolden text-end">{dateNow}</p>
      </div>

      <form onSubmit={handleSubmit(filledData)}>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col">
            <label
              htmlFor="FirstNameInput"
              className="px-1 whitespace-nowrap text-sm"
            >
              First Name
            </label>
            <input
              id="FirstNameInput"
              type="text"
              className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readOrEditInput}
              value={users ? users?.firstName : "First Name"}
              {...register("firstName", {
                required: true,
                maxLength: 14,
                minLength: 3,
              })}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="PhoneInput"
              className="px-1 whitespace-nowrap  text-sm"
            >
              Phone
            </label>
            <input
              id="PhoneInput"
              type="tel"
              className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readOrEditInput}
              value={users ? users.phone : "Last Name"}
              {...register("phone", {
                // pattern: /([0-9]{2,3})?(([0-9]{2}))([0-9]{4,5})([0-9]{4})/,
                required: true,
              })}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="LastNameInput"
            className=" mt-1 px-1 whitespace-nowrap  text-sm"
          >
            Last Name
          </label>
          <input
            id="LastNameInput"
            type="text"
            className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
            readOnly={readOrEditInput}
            value={users ? users.lastName : "Last Name"}
            {...register("lastName", {
              required: true,
              maxLength: 20,
              minLength: 3,
            })}
          />
          <div />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="EmailInput"
            className=" mt-1 px-1 whitespace-nowrap  text-sm"
          >
            E-mail
          </label>
          <input
            id="EmailInput"
            type="text"
            className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
            readOnly={readOrEditInput}
            value={users ? users.email : "E-mail"}
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
            <label
              htmlFor="PasswordInput"
              className="mx-1 mt-1 px-1 whitespace-nowrap  text-sm"
            >
              Password
            </label>
            {/* todo unhash if loggeind hash to path */}
            <input
              id="PasswordInput"
              type="text"
              className="mx-1  px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readOrEditInput}
              value={users ? users.password : "Password"}
              {...register("password", {
                // pattern:
                //   /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="PasswordInput"
              className=" mt-1 px-1 whitespace-nowrap  text-sm"
            >
              Created At
            </label>
            <input
              disabled
              value={users ? users.createdAt : "Created At"}
              readOnly
              className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
            />
          </div>
        </div>
        <menu className="mt-1 ml-5">
          <DefaultBtn
            textBtn="messages"
            className="w-[200px]"
            // onClick={() =>
            //   setVisitorsMessageVisibilityState(
            //     handleVisibility(visitorsMessagesVisibility)
            //   )
            // } todo
          />
          <DefaultBtn
            textBtn="edit"
            onClick={() => setReadOrEditInput(false)}
          />
          <DefaultBtn
            textBtn="save"
            type="submit"
            onClick={() => setReadOrEditInput(true)}
          />
        </menu>
      </form>
      <FooterBar />
    </>
  );
};

export default SignInSignUpScreen;
