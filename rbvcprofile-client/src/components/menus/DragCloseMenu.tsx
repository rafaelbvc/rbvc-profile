const DragCloseMenu = (props) => {
  const { onClick, textHeader } = props;

  return (
    <>
      <div className="flex min-w-[21rem] max-w-[39.5rem] justify-between">
        <p className="pl-2 text-sm  cursor-pointer">dragme</p>
        <p className="text-sm whitespace-nowrap animate-bounce">{textHeader}</p>
        <button onClick={onClick} className="pr-2 text-sm ">
          close
        </button>
      </div>
      <div className="min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] w-full" />
    </>
  );
};

export default DragCloseMenu;