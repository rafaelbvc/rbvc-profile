import { useCallback, useEffect, useState } from "react";
import { useVisibilityContext } from "../../../../contexts/useVisibilityContext";
import DefaultBtn from "../../../buttons/DefaultBtn";
import DragCloseMenu from "../../../menus/DragCloseMenu";
import { SubmitHandler, useForm } from "react-hook-form";
import FooterBar from "../../../FooterBar";
import { useUserData } from "../../../../hooks/useUserData";
import CircleLoader from "../../../loadingSpinners/CircleLoader";
import { formatISODate, timeNow } from "../../../../utils/handleTime";
import { IUsers } from "../../../../interfaces/IUsers";
import { IMessages } from "../../../../interfaces/IMessages";
import { useAddNewMessageMutation } from "./messagesApiSlice";
import { useSelector } from "react-redux";
import { selectUserById } from "../usersApiSlice";
import { useMessageData } from "../../../../hooks/useMessageData";
import ShowUserMessagesComponent from "./ShowUserMessagesComponent";

const VisitorMessages = () => {
  const { setVisitorsMessageVisibilityState } = useVisibilityContext();

  const { messagesByUser, messageError, messageLoading, messageSucess } =
    useMessageData();

  // { error, isSucess, isLoading }
  const [addNewMessage] = useAddNewMessageMutation();

  // const { userData, sucessState, errorType, loadingState } =
  const { userData, userLoadingState } = useUserData();

  const [users, setUsers] = useState<IUsers>();
  const [messages, setMessages] = useState<any>(messagesByUser);
  const [readOrEditInput, setReadOrEditInput] = useState(false);
  const [loadingState, setLoadingState] = useState<boolean>(messageLoading);

  const userIdPath = users?._id;
  const userById = useSelector((state) => selectUserById(state, userIdPath));

  const handleUsers = useCallback(() => {
    const data = userData?.entities["64b76acab91a055eb304ae00"];
    setUsers(data);
  }, [userData]);

  const handleMessages = useCallback(async () => {
    if (messageLoading && !messageError) {
      console.log("loading...");
      setLoadingState(true);
    } else if (messageError) {
      console.log(`Sory we have an issue: ${messageError}`);
    } else {
      const data = messagesByUser;
      // const data = messagesByUser;
      setMessages(data);
    }
  }, [messagesByUser, messageError, messageLoading]);

  const arr = messages.map((itens: IMessages) => (
    <ShowUserMessagesComponent
      key={itens.user}
      title={itens.title}
      message={itens.message}
      createdAt={formatISODate(itens.createdAt)}
      updatedAt={formatISODate(itens.updatedAt)}
    />
  ));

  console.log(messages, "getMessages");

  const {
    reset,
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<IMessages>();

  const onSubmit: SubmitHandler<IMessages> = async (data) => {
    const datas = data;
    if (!datas) {
      console.log("No data");
      return;
    } else if (errors) {
      console.log("Errors", errors);
      return;
    }
    await addNewMessage(datas);
    reset();
  };

  const renderContent = userLoadingState ? (
    <CircleLoader isLoading={userLoadingState} />
  ) : (
    <form className="mt-1 flex flex-col " onSubmit={handleSubmit(onSubmit)}>
      <input
        id="user"
        type="text"
        className="hidden"
        value={userById?._id}
        {...register("user")}
      />
      <input
        // defaultValue={"title"}
        id="title"
        placeholder="Title"
        className="px-1 mb-1 text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
        type="text"
        readOnly={readOrEditInput}
        {...register("title", { maxLength: 30, min: 6 })}
      />
      <textarea
        // defaultValue={"type your message here..."}
        id="message"
        placeholder="type your message here..."
        className="px-1 text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
        maxLength={5000}
        rows={10}
        spellCheck={true}
        readOnly={readOrEditInput}
        wrap="hard"
        {...register("message")}
      />
      <menu className="flex justify-between m-1">
        <DefaultBtn textBtn="edit" onClick={() => setReadOrEditInput(false)} />
        <DefaultBtn
          textBtn="reset"
          onClick={() => {
            reset();
            setReadOrEditInput(false);
          }}
        />
        <input type="submit" value="create" className="vSubmitForm ml-8" />
      </menu>
    </form>
  );

  const RenderShowMessages = loadingState ? (
    <CircleLoader isLoading={loadingState} />
  ) : messageError ? (
    <p>Sory we got an issue...</p>
  ) : (
    arr
  );

  // const messagesWatch = watch();
  // console.log(messagesWatch);
  useEffect(() => {
    handleMessages();
  }, [handleMessages, messageError, messageLoading, messagesByUser]);

  useEffect(() => {
    handleUsers();
  }, [userLoadingState, userData, handleUsers]);

  return (
    <>
      <DragCloseMenu
        textHeader="messages"
        onClick={() => setVisitorsMessageVisibilityState(" hidden")}
      />
      <div className="flex flex-col min-w-[21rem]">
        <header className="flex justify-between gap-4 mt-1 px-1">
          <p className="font-poppins">
            {users?.firstName}&nbsp;{users?.lastName}
          </p>
          <p className="font-poppins self-center text-dGolden">{timeNow()}</p>
        </header>
        {renderContent}
      </div>
      <FooterBar />
      {RenderShowMessages}
    </>
  );
};

export default VisitorMessages;
