import { useState } from "react";
import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";
import { useAddNewMessageMutation } from "./messagesApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";

const VisitorMessagesScreen = () => {
  const { setVisitorsMessageVisibilityState } = useVisibilityContext();

  // const { data: users } = useGetUsersQuery();
  // const { entities } = users;
  // const userId = entities["64cefc01fbffa3b6dcbdbc88"];

  const [addMessage] = useAddNewMessageMutation();
  const [message, setMessage] = useState({
    user: "",
    title: "",
    message: "",
  });

  const handleNewMessage = (e) => {
    setMessage({
      ...message,
      user: "",
      title: e.target.title,
      message: e.target.message,
    });
  };

  const createMessage = async (e) => {
    e.preventDefault();
    console.log(message, "glotididi");
    // await addMessage(message);
  };

  return (
    <>
      <DragCloseMenu
        changeMaxW={"max-w-[45rem]"}
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
          onChange={handleNewMessage}
          value={message.title}
          required
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
          onChange={handleNewMessage}
          value={message.message}
          required
        />
        <menu className="flex justify-between mx-2">
          <DefaultBtn textBtn={"clear"} />
          <DefaultBtn textBtn={"board"} />
          <DefaultBtn textBtn={"create"} type="submit" />
        </menu>
      </form>
      <FooterBar />
    </>
  );
};

export default VisitorMessagesScreen;
