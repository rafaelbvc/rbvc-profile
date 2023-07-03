import { useVisibilityContext } from "../../../contexts/useVisibilityContext";
import DefaultBtn from "../../buttons/DefaultBtn";
import DragCloseMenu from "../../menus/DragCloseMenu";

const VisitorMessages = () => {
  const { setVisitorsMessageVisibilityState } = useVisibilityContext();

  return (
    <>
      <DragCloseMenu
        textHeader="messages"
        onClick={() => setVisitorsMessageVisibilityState(" hidden")}
      />
      <div className="flex flex-col min-w-[21rem]">
        <div className="flex justify-between gap-4">
          <p className="font-poppins self-center">username &nbsp; lastname</p>
          <p className="font-poppins self-center text-dGolden">lastLogin</p>
        </div>
        <div className="mt-2 flex flex-col">
          <input
            placeholder="title"
            className="px-1 mb-1 font-poppings  text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
          />
          <textarea
            defaultValue={""}
            id="TextMessage"
            placeholder="type your message here..."
            className="px-1 font-poppings  text-base border-1 border-dGoldenAlpha rounded min-w-[21rem]"
            maxLength={5000}
            rows={10}
            spellCheck={true}
            wrap="hard"
          />
        </div>
        <div className="self-end">
          <DefaultBtn textBtn="submit" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] " />
    </>
  );
};

export default VisitorMessages;
