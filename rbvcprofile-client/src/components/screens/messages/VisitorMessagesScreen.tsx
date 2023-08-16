import { useState } from "react";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";
import ShowUser from "../users/ShowUser";
import { useAddNewMessageMutation } from "./messagesApiSlice";

const VisitorMessagesScreen = () => {
  const { setVisitorsMessageVisibilityState } = useVisibilityContext();

  const { content } = ShowUser();

  const [addNewMessage] = useAddNewMessageMutation();

  const [message, setMessage] = useState({
    user: "",
    title: "",
    message: "",
  });

  const createMessage = async (e) => {
    e.preventDefault();
    await addNewMessage(message);
    setMessage({ ...message, title: "", message: "" });
  };

  return (
    <>
      <DragCloseMenu
        changeMaxW={"max-w-[32rem]"}
        textHeader="Messages"
        onClick={() => setVisitorsMessageVisibilityState(" hidden")}
      />
      <form className="mt-1 flex flex-col px-2" onSubmit={createMessage}>
        <label className="vLabels" htmlFor="title">
          Title
        </label>
        <input
          name="title"
          className="px-1 mb-1text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
          type="text"
          onChange={(e) =>
            setMessage({ ...message, user: content?.id, title: e.target.value })
          }
          value={message.title}
        />
        <label className="vLabels" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          className="px-2 py-1 text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
          maxLength={5000}
          rows={10}
          spellCheck={true}
          onChange={(e) => setMessage({ ...message, message: e.target.value })}
          value={message.message}
        />
        <menu className="flex justify-between mx-2">
          <DefaultBtn textBtn={"clear"} />
          <DefaultBtn textBtn={"board"} />
          <DefaultBtn textBtn={"create"} typeBtn="submit" />
        </menu>
      </form>
      <FooterBar />
    </>
  );
};

export default VisitorMessagesScreen;
