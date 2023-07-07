import { useEffect, useState } from "react";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import StatusIcon from "../../svg/statusIcon";
import DefaultBtn from "../../buttons/DefaultBtn";
//----
import { selectUserById, useGetUsersQuery } from "./visitorApiSlice";
import { useForm } from "react-hook-form";
import { handleVisibility } from "../../../utils/visibilityHandler";
import { useSelector } from "react-redux";
import DragCloseMenu from "../../menus/DragCloseMenu";

const SettingsScreen = () => {
  // const user = useSelector((state) => selectUserById(state, userId));

  const { setSettingsVisibilityState } = useVisibilityContext();

  const [statusColor, setStatusColor] = useState("#00FF00");
  const [readOrEditInput, setReadOrEditInput] = useState(false); //editbuton
  const [dateNow, setDateNow] = useState("");
  const [activeStatus, setActiveStatus] = useState(true); //status

  const [dataUsers, setDataUsers] = useState();

  const { data } = useGetUsersQuery();

  const handleData = () => {
    if (data) {
      setDataUsers(data);
    }
  };

  const arr: any = {
    entities: [
      {
        _id: "wfwffwef",
        firstName: "wfwfwef",
      },
    ],
    ids: { indice: "dado" },
  };

  

  // console.log(arr, "dddddddddd")

  // console.log(dataUsers);

  // const {entities, ids } = arr

  // console.log(arr.entities)

  // const j = arr.entities
  // const addf = j.map((x,ids):any => <div key={ids}>{x.map(({firstName}:any)  => <div>{firstName}</div>)}</div>)


  // const arrData = Object.keys(arr).map(i => JSON.parse(arr[Number(i)]))
  // console.log(arrData)

  // const arrDatas = arrData.map()

  // console.log(arrData)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  const { setVisitorsMessageVisibilityState, visitorsMessagesVisibility } =
    useVisibilityContext();

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
  // console.log(dataUsers);

  // const usersArr = dataUsers.map(():any => { <div key={_id}>{firstName}</div>})

  useEffect(() => {
    handleTime();
    handleData();

    ///-------------
    //   fetch("http://localhost:5030/users")
    //     .then((res) => res.json())
    //     .then((data: any) => {
    //       const renderUsers = data;
    //       const renderUser: any = (
    //         <ul key={data[7]._id}>
    //           <li>
    //             <p>{data[7].firstName}</p>
    //             <p>{data[7].lastName}</p>
    //             <p>{data[7].phone}</p>
    //             <p>{data[7].email}</p>
    //             <p>{data[7].active}</p>
    //           </li>
    //         </ul>
    //       );
    //       setDataUsers(renderUsers);
    //     })
    //     .catch((e) => console.log(e));
  }, [data]);

  // if (user) {
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
              className="mx-1 px-1 border-1 border-dGoldenAlpha rounded"
              readOnly={readOrEditInput}
              value={"ff" ? "ff" : "First Name"}
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
              // value={user.phone ? user.phone : "Last Name"}
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
            // value={user.lastName ? user.lastName : "Last Name"}
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
            // value={user.email ? user.email : "E-mail"}
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
              // value={user.password ? user.password : "Password"}
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
              // value={user.createdAt ? user.createdAt : "Created At"}
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
          <DefaultBtn
            textBtn="edit"
            onClick={() => setReadOrEditInput(false)}
          />
          <DefaultBtn
            textBtn="save"
            type="submit"
            onClick={() => setReadOrEditInput(true)}
          />
        </div>
      </form>
      {/* //dddd */}
      <footer className="bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] " />
      <div></div>
    </>
  );
  // } else return null;
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
