import FooterBar from "../FooterBar";

// type TDragCloseMenu = {
//   onClick: () => void;
//   textHeader: string;
//   dragCloseMenuStyle: string;
// };

const DragCloseMenu = (props) => {
  const { onClick, textHeader, dragCloseMenuStyle, changeMaxW } = props;

  return (
    <div
      className={`w-screen sm:min-w-[21rem] ${
        !changeMaxW ? "sm:max-w-[29rem]" : changeMaxW
      } ${dragCloseMenuStyle}`}
    >
      <div className="flex justify-between cursor-pointer px-2">
        <p className="text-dGolden pDragCloseBar">dragme</p>
        <p className="pDragCloseBar animate-bounce">{textHeader}</p>
        <p onClick={onClick} className="pDragCloseBar">
          close
        </p>
      </div>
      <FooterBar />
    </div>
  );
};

export default DragCloseMenu;
