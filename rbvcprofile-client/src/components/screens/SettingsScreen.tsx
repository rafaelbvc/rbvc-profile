import { useState } from "react";
import { useVisibilityContext } from "../../contexts/VisibilityContext";
import DragCloseMenu from "../menus/DragCloseMenu";
import StatusIcon from "../svg/statusIcon";
import DefaultBtn from "../buttons/DefaultBtn";
import { useForm } from "react-hook-form";

const SettingsScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { setSettingsVisibilityState } = useVisibilityContext();

  const [statusColor, setStatusColor] = useState("#00FF00");
  const [readInput, setReadInput] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DragCloseMenu
        textHeader="user settings"
        onClick={() => setSettingsVisibilityState(" hidden")}
      />

      <div className="flex flex-row justify-around  mt-1 px-1">
        <p className="font-poppins font-normal text-sm self-center">{`STATUS: ${""}`}</p>
        <StatusIcon width="1.5rem" fillColor={statusColor} />
        <p className="text-dGolden">28/Junho/2049</p>
      </div>
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
            className=" px-1 border-1 border-dGoldenAlpha rounded"
            readOnly={readInput}
            onChange={(e) => e.target.value}
            defaultValue={""}
            {...register("firstName")}
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
            type="text"
            placeholder="Phone"
            className="px-1 border-1 border-dGoldenAlpha rounded"
            readOnly={readInput}
            defaultValue={""}
            {...register("phone")}
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
          className="px-1 border-1 border-dGoldenAlpha rounded"
          readOnly={readInput}
          defaultValue={""}
          {...register("LastName")}
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
          className="px-1 border-1 border-dGoldenAlpha rounded"
          readOnly={readInput}
          defaultValue={""}
          {...register("email")}
        />
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-col">
          <label
            htmlFor="PasswordInput"
            className=" mt-1 px-1 whitespace-nowrap  text-sm"
          >
            Password
          </label>
          <input
            id="PasswordInput"
            type="text"
            placeholder="Password"
            className="px-1 border-1 border-dGoldenAlpha rounded"
            readOnly={readInput}
            defaultValue={""}
            {...register("password")}
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
            readOnly
            className="px-1 border-1 border-dGoldenAlpha rounded"
          />
        </div>
      </div>
      <div className="mt-1 ml-5">
        <DefaultBtn textBtn="messages" className="w-[200px]" />
        <DefaultBtn textBtn="edit" onClick={() => setReadInput(false)} />
        <DefaultBtn textBtn="save" onClick={() => setReadInput(true)} />
      </div>
      <input type="submit" />
      <div className="bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] " />
    </form>
  );
};

export default SettingsScreen;

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
