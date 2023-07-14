import DefaultBtn from "../buttons/DefaultBtn";

const SettingsScreenMenu = (props) => {
  const { onClickEdit, onCickMessagesVisibility } = props;
  return (
    <div className="flex mt-1 gap-10 ml-8 md:ml-0 justify-between md:gap-2">
      <DefaultBtn
        textBtn="message"
        className="w-[200px]"
        onClick={() => onCickMessagesVisibility}
      />
      <DefaultBtn textBtn="edit" onClick={() => onClickEdit} />
    </div>
  );
};

export default SettingsScreenMenu;

// onClick={() =>
//     setVisitorsMessageVisibilityState(
//       handleVisibility(visitorsMessagesVisibility)
//     )
//   }
