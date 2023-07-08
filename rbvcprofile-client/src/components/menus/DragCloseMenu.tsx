const DragCloseMenu = (props) => {
  const { onClick, textHeader, className } = props;

  return (
    <div className={`${className} min-w-[21rem]`}>
      <div className=" flex  justify-between  cursor-pointer">
        <p className="pl-2  text-dGolden text-xxs font-bold">DRAGME</p>
        <p className="text-xxs font-bold whitespace-nowrap animate-bounce uppercase">
          {textHeader}
        </p>
        <p onClick={onClick} className="pr-2 text-xxs font-bold">
          CLOSE
        </p>
      </div>
      <div className="bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] mt-[-0.15rem]" />
    </div>
  );
};

export default DragCloseMenu;

