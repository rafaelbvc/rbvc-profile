import { useEffect, useState } from "react";
import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import DragCloseMenu from "../menus/DragCloseMenu";
import StatusIcon from "../svg/statusIcon";
import DefaultBtn from "../buttons/DefaultBtn";
import { useForm } from "react-hook-form";
import { handleVisibility } from "../../utils/visibilityHandler";
import { useGetUsersQuery } from "../menus/visitor/visitorApiSlice";

const SettingsScreenk = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  const {
    data: users,
    isLoading,
    isSucess,
    isError,
    error,
  } = useGetUsersQuery();



  // let content

  // if (isLo)

  //fields
  // const watchData = watch();
  // console.log(watchData);

  const {
    setSettingsVisibilityState,
    setVisitorsMessageVisibilityState,
    visitorsMessagesVisibility,
  } = useVisibilityContext();

  const [statusColor, setStatusColor] = useState("#00FF00");
  const [readInput, setReadInput] = useState(false);
  const [dateNow, setDateNow] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);

  const handleTime = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const isosDate = today.toISOString().slice(0, 10);
    setDateNow(isosDate);
  };

  const handleActiveStatus = () => {
    if (activeStatus) {
      setActiveStatus(false);
      setStatusColor("#FF0000");
    } else {
      setActiveStatus(true);
      setStatusColor("#00FF00");
    }
  };

  useEffect(() => {
    handleTime();
  }, []);

  return (
    <>
      <DragCloseMenu
        textHeader="user settings"
        onClick={() => setSettingsVisibilityState(" hidden")}
      />

      <div className="flex flex-row justify-between   mt-1 px-1">
        <button onClick={handleActiveStatus} className="flex">
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="First Name"
              className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readInput}
              defaultValue={""}
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
              placeholder="Phone"
              className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readInput}
              defaultValue={""}
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
            placeholder="Last Name"
            className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
            readOnly={readInput}
            defaultValue={""}
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
            placeholder="E-mail"
            className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
            readOnly={readInput}
            defaultValue={""}
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
            <input
              id="PasswordInput"
              type="text"
              placeholder="Password"
              className="mx-1  px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readInput}
              defaultValue={""}
              {...register("password", {
                pattern:
                  /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
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
              defaultValue={""}
              readOnly
              className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
            />
          </div>
        </div>
        <div className="mt-1 ml-5">
          <DefaultBtn
            textBtn="messages"
            className="w-[200px]"
            onClick={() =>
              setVisitorsMessageVisibilityState(
                handleVisibility(visitorsMessagesVisibility)
              )
            }
          />
          <DefaultBtn textBtn="edit" onClick={() => setReadInput(false)} />
          <DefaultBtn
            textBtn="save"
            type="submit"
            onClick={() => setReadInput(true)}
          />
        </div>
        <div className="bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] " />
      </form>
    </>
  );
};

export default SettingsScreenk;

//firstName  + 3 letras - 16                                         //only-read
//lastName   + 3 letras - 30
//email  validar regex
//phone  mascara validado pais area e formato Mobile
//password  *** hash
//messagesBTN _messages  *****
//active  2 states - active - inactive  #FF0000  #00FF00
//createdAt - unico
//lastUptade   - datenow
//timeNow - no useEffect

//edit //salvar ---state editavel

//password
// The password length must be greater than or equal to 8
// The password must contain one or more uppercase characters
// The password must contain one or more lowercase characters
// The password must contain one or more numeric values
// The password must contain one or more special characters
