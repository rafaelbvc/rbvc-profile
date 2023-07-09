import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ISignInSignUpScreen } from "../../../interfaces/ISignInSignUpScreen";
import { formatISODate, timeNow } from "../../../utils/handleTime";
import {
  activateStatusTextHandler,
  activeStatusColorHandler,
  activeStatusIconColorHandler,
  activeStatusTextHandler,
} from "../../../utils/activeStatusHandler";
import DragCloseMenu from "../../menus/DragCloseMenu";
import StatusIcon from "../../svg/StatusIcon";
import FooterBar from "../../FooterBar";
import DefaultBtn from "../../buttons/DefaultBtn";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";

const SignInSignUpScreen = (props: ISignInSignUpScreen) => {
  const {
    activeStatus,
    loadingState,
    handleSubmitF,
    filledData,
    visitorScreenType,
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

  const [users, setUsers] = useState<any>(filledData);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [readOrEditInput, setReadOrEditInput] = useState(false);
  const [activation, setActivation] = useState<boolean>(activeStatus);

  const handleUsers = () => {
    setUsers(filledData);
  };

  const handleActiveStatus = () => {
    if (activeStatus) {
      setActivation(true);
    } else {
      setActivation(false);
    }
  };

  useEffect(() => {
    timeNow();
    handleActiveStatus();
    handleUsers();
  }, [activeStatus, users]);

  return (
    <>
      <DragCloseMenu
        textHeader="user settings"
        onClick={() => setSignInSignUpVisibilityState(" hidden")}
      />
      <header className="flex flex-row justify-between   mt-1 px-1">
        <button onClick={() => handleActiveStatus()} className="flex">
          <StatusIcon
            width="1.5rem"
            fillColor={activeStatusIconColorHandler(activeStatus)}
          />
          <p className="text-sm self-center">
            &nbsp; {activateStatusTextHandler(activation)}
          </p>
        </button>
        <div className="flex ">
          <p className="font-poppins text-sm self-center">STATUS: &nbsp;</p>
          <p
            className={`font-poppins text-sm self-center text-left ${activeStatusColorHandler(
              activation
            )}`}
          >
            {activeStatusTextHandler(activation)}
          </p>
        </div>

        <p className="text-dGolden text-end">{timeNow()}</p>
      </header>

      <form onSubmit={handleSubmit(filledData)}>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col">
            <label
              htmlFor="FirstNameInput"
              className="vLabels"
            >
              First Name
            </label>
            <input
              id="FirstNameInput"
              type="text"
              className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readOrEditInput}
              placeholder="First Name"
              value={users?.firstName}
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
              className="vLabels"
            >
              Phone
            </label>
            <input
              id="PhoneInput"
              type="tel"
              className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readOrEditInput}
              placeholder="Phone"
              value={users?.phone}
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
            className="vLabels"
          >
            Last Name
          </label>
          <input
            id="LastNameInput"
            type="text"
            className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
            readOnly={readOrEditInput}
            placeholder="Last Name"
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
          <label
            htmlFor="EmailInput"
            className="vLabels"
          >
            E-mail
          </label>
          <input
            id="EmailInput"
            type="text"
            className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
            readOnly={readOrEditInput}
            placeholder="E-mail"
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
            <label
              htmlFor="PasswordInput"
              className="vLabels"
            >
              Password
            </label>
            {/* todo unhash if loggeind hash to path */}
            <input
              id="PasswordInput"
              type="text"
              className="mx-1  px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readOrEditInput}
              placeholder="Password"
              value={users?.password}
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
              className="vLabels"
            >
              Created At
            </label>
            <input
              disabled
              placeholder="Created At"
              value={formatISODate(users?.createdAt)}
              readOnly
              className="mx-1 px-1 text-right border-1 border-dGoldenAlpha rounded"
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
