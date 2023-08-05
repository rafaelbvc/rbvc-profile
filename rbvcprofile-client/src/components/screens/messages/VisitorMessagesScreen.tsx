import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import FooterBar from "../../FooterBar";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";

const VisitorMessagesScreen = () => {
  const { setVisitorsMessageVisibilityState } = useVisibilityContext();

  return (
    <>
      <DragCloseMenu
      changeMaxW={"max-w-[45rem]"}
        textHeader="Messages"
        onClick={() => setVisitorsMessageVisibilityState(" hidden")}
      />
      <form className="mt-1 flex flex-col px-2">
        <label className="vLabels" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          className="px-1 mb-1text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
          type="text"
        />
        <label className="vLabels" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="px-2 py-1 text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
          maxLength={5000}
          rows={10}
          spellCheck={true}
        />
      </form>
      <menu className="flex justify-between mx-2">
        <DefaultBtn textBtn={"clear"} />
        <DefaultBtn textBtn={"board"} />
        <DefaultBtn textBtn={"create"} />
      </menu>
      <FooterBar />
    </>
  );
};

export default VisitorMessagesScreen;
