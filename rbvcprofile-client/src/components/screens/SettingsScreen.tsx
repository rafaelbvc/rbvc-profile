import { useEffect, useState } from "react";
import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import DragCloseMenu from "../menus/DragCloseMenu";
import StatusIcon from "../svg/statusIcon";
import DefaultBtn from "../buttons/DefaultBtn";
import { useForm } from "react-hook-form";
import { handleVisibility } from "../../utils/visibilityHandler";
import SettingsScreenData from "./SettingsScreenData";
import { useGetUsersQuery } from "../menus/visitor/visitorApiSlice";

const SettingsScreen = (  ) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    userData: users,
    isError,
    error,
    loading,
    isLoading,
    isSucess,
  } = useGetUsersQuery();

  const [dataUsers, setDataUsers] = useState();
  const [dataError, setDataError] = useState();
  const [renderData, setRenderData] = useState<[]>();
  console.log(renderData)

  const handleUsers = () => {
    if (users){
      setRenderData(users)
    }
  }



  const onSubmit = async (data) => {
    console.log(data);
  };

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

  // console.log({ userId });

  useEffect(() => {
    handleTime();
    handleUsers();

    // .then((datas) => console.log(datas[0].firstName))
    // console.log(data[0].firstName)

    // fetch("http://localhost:5030/users")
    //   .then((res) => res.json())
    //   .then((data: any) =>
    //     data.map((data) => {
    //       const dataUserss = (
    //         <ul key={data._id}>
    //           <li>
    //             <p>{data.firstName}</p>
    //             <p>{data.astName}</p>
    //             <p>{data.phone}</p>
    //             <p>{data.email}</p>
    //             <p>{data.active}</p>
    //           </li>
    //         </ul>
    //       );

    //       // data.map((dataUserss: any) => usersArr.push(dataUserss));
    //       console.log(dataUserss, "dataUsers");
    //       if (dataUserss) {

    //         // setDataUsers();
    //       }
    //     })
    //   );

    // fetch("http://localhost:5030/users")
    //   .then((res) => res.json())
    //   .then((data: any) =>
    //     setRenderData(
    //       <ul key={data[7]._id}>
    //         <li>
    //           <p>{data[7].firstName}</p>
    //           <p>{data[7].lastName}</p>
    //           <p>{data[7].phone}</p>
    //           <p>{data[7].email}</p>
    //           <p>{data[7].active}</p>
    //         </li>
    //       </ul>

    // );
    // .then((datas) => {const dataUsers:any = <ul><li key={datas._id}>{datas.firstName}</li></ul>; setRenderData(dataUsers)}
    // ).catch((e) => console.log(e));
    // datas.map((_ids, firstName) => {
    //   <ul>
    //     <li key={_ids}>{firstName}</li>
    //   </ul>;
    // })
    // )

    // .then((data) => {
    //   setRenderData(
    //     data.map((ids: any, items: any) => (
    //       <ul key={ids}>
    //         {items.map((_id, firstName, lastName) => (
    //           <li key={_id}>{firstName}</li>
    //         ))}
    //       </ul>
    //     ))
    //   );
    //   setDataUsers(data);
    // })
    // .catch((e) => setDataError(e));
    // console.log(dataError);
    // console.log(dataUsers, "fafeffDATA");
  }, []);

  // console.log(dataError, "dataetwgwgrgrg");
  // console.log(dataUsers, "dataeusersrsrsrs");
  // console.log(renderData, "rendergwgrgrg");

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
        {renderData}
      </form>
    </>
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

//password
// The password length must be greater than or equal to 8
// The password must contain one or more uppercase characters
// The password must contain one or more lowercase characters
// The password must contain one or more numeric values
// The password must contain one or more special characters

// const {
//   data: users,
//   isLoading,
//   isSucess,
//   isError,
//   error,
// } = useGetUsersQuery();

// let content;

// if (isLoading) content = <p>Loading...</p>;
// console.log(isLoading, ":gwregrgrrgg");

// if (isError) {
//   content = (
//     <p className={isError ? "errorrrr" : "offfeeeescrenn"}>
//       {error?.data?.message}
//     </p>
//   );
//   console.log(isError, "24g3gg5g345g34g34g345g345");
// }

// if (isSucess) {
//   const { ids } = users;

//   const rendering = ids?.length
//     ? ids.map((userId) => <div key={userId}>{<ul>{userId}</ul>}</div>)
//     : null;

// }
