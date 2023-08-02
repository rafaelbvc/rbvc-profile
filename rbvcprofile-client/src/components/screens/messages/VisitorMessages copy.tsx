// import { useCallback, useEffect, useMemo, useState } from "react";
// import { useVisibilityContext } from "../../../../contexts/useVisibilityContext";
// import DefaultBtn from "../../../buttons/DefaultBtn";
// import DragCloseMenu from "../../../menus/DragCloseMenu";
// import { SubmitHandler, useForm } from "react-hook-form";
// import FooterBar from "../../../FooterBar";
// import { useUserData } from "../../../../hooks/useUserData";
// import CircleLoader from "../../../loadingSpinners/CircleLoader";
// import { formatISODate, timeNow } from "../../../../utils/handleTime";
// import { IUsers } from "../../../../interfaces/IUsers";
// import { IMessages } from "../../../../interfaces/IMessages";
// import { useAddNewMessageMutation } from "./messagesApiSlice";
// import { useSelector } from "react-redux";
// import { selectUserById } from "../usersApiSlice";
// import { useMessageData } from "../../../../hooks/useMessageData";
// import ShowUserMessagesComponent from "./ShowUserMessages";
// import { IInputMessageData } from "../../../../interfaces/IInputMessageData";

const Flof = () => {
  return <></>;
};
export default Flof;

// const url = "http://localhost:5030/messages/?user_id=64b76acab91a055eb304ae00";

// const VisitorMessages = () => {
//   const { setVisitorsMessageVisibilityState } = useVisibilityContext();

//   const { messagesByUser, messageError, messageLoading, messageSucess } =
//     useMessageData();

//   // { error, isSucess, isLoading }
//   const [addNewMessage] = useAddNewMessageMutation();

//   // const { userData, sucessState, errorType, loadingState } =
//   const { userData, userLoadingState } = useUserData();

//   const [users, setUsers] = useState<IUsers>();
//   const [messages, setMessages] = useState<any>([]);
//   const [readOrEditInput, setReadOrEditInput] = useState(false);
//   const [loadingState, setLoadingState] = useState<boolean>(messageLoading);
//   const [userId, setUserId] = useState<string>();

//   const userIdPath = users?._id;

//   const handleUserById = () => {
//     setUserId(userIdPath);
//   };
//   const userById: IUsers = useSelector((state) =>
//     selectUserById(state, userIdPath)
//   );
//   const handleUsers = useCallback(() => {
//     const data = userData?.entities["64b76acab91a055eb304ae00"];
//     setUsers(data);
//   }, [userData, userLoadingState]);

//   const handleMessages = useCallback(async () => {
//     if (messageLoading && !messageError) {
//       console.log("loading...");
//       setLoadingState(true);
//     } else if (messageError) {
//       console.log(`Sory we have an issue: ${messageError}`);
//       setLoadingState(false);
//     } else {
//       setLoadingState(false);
//       fetch(url)
//         .then((data) => data.json())
//         .then((item) => setMessages(item))
//         .catch((e) => console.log(e));
//     }
//   }, [messagesByUser, messageError, messageLoading]);

//   const arr = messages.map((itens: IMessages) => (
//     <ShowUserMessagesComponent
//       key={itens?._id.toString()}
//       title={itens?.title}
//       message={itens?.message}
//       createdAt={formatISODate(itens?.createdAt)}
//       updatedAt={formatISODate(itens?.updatedAt)}
//     />
//   ));

//   const {
//     reset,
//     register,
//     handleSubmit,
//     watch,
//   } = useForm<IMessages>();

//   const onSubmit: SubmitHandler<IInputMessageData> = async (data) => {
//     const datas = await data;
//     console.log(datas);
//     if (!datas) {
//       console.log("No data");
//       return;
//     }
//      else {
//       const newMessage = [{ ...datas, user: userId }];
//       const message = newMessage[0];
//       console.log(message, "im new message");
//       addNewMessage(message);
//       // reset();
//     }
//   };

//   // console.log(users._id, "im users")

//   const renderContent = userLoadingState ? (
//     <CircleLoader isLoading={userLoadingState} />
//   ) : (
//     <form className="mt-1 flex flex-col " onSubmit={handleSubmit(onSubmit)}>
//       <input
//         id="user_id"
//         type="text"
//         value={userById?._id}
//         className="hidden"
//         {...register("user_id")}
//       />
//       <input
//         // defaultValue={"title"}
//         id="title"
//         placeholder="Title"
//         className="px-1 mb-1 text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
//         type="text"
//         readOnly={readOrEditInput}
//         {...register("title", { maxLength: 30, min: 6 })}
//       />
//       <textarea
//         // defaultValue={"type your message here..."}
//         id="message"
//         placeholder="type your message here..."
//         className="px-1 text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
//         maxLength={5000}
//         rows={10}
//         spellCheck={true}
//         readOnly={readOrEditInput}
//         wrap="hard"
//         {...register("message")}
//       />
//       <menu className="flex justify-between m-1">
//         <DefaultBtn textBtn="edit" onClick={() => setReadOrEditInput(false)} />
//         <DefaultBtn
//           textBtn="reset"
//           onClick={() => {
//             reset();
//             setReadOrEditInput(false);
//           }}
//         />
//         <input type="submit" value="create" className="vSubmitForm ml-8" />
//       </menu>
//     </form>
//   );

//   const RenderShowMessages = loadingState ? (
//     <CircleLoader isLoading={loadingState} />
//   ) : messageError ? (
//     <p>Sory we got an issue...</p>
//   ) : (
//     arr
//   );
//   // null;

//   const messagesWatch = watch();
//   console.log(messagesWatch);
//   useEffect(() => {
//     handleMessages();
//   }, [messageError, messageLoading, messagesByUser, handleMessages]);

//   useEffect(() => {
//     handleUsers();
//   }, [userLoadingState, userData, handleUsers]);

//   useEffect(() => {
//     handleUserById();
//   }, [userById, handleUserById]);

//   return (
//     <>
//       <DragCloseMenu
//         textHeader="messages"
//         onClick={() => setVisitorsMessageVisibilityState(" hidden")}
//       />
//       <div className="flex flex-col min-w-[21rem]">
//         <header className="flex justify-between gap-4 mt-1 px-1">
//           <p className="font-poppins">
//             {users?.firstName}&nbsp;{users?.lastName}
//           </p>
//           <p className="font-poppins self-center text-dGolden">{timeNow()}</p>
//         </header>
//         {renderContent}
//       </div>
//       <FooterBar />
//       {RenderShowMessages}
//     </>
//   );
// };

// export default VisitorMessages;
