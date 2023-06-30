const DragCloseMenu = (props) => {
  const { onClick, textHeader } = props;

  return (
    <>
      <div className="container flex min-w-[21rem] max-w-[39.5rem] justify-between">
        <p className="pl-2 text-sm  cursor-pointer text-dGolden">dragme</p>
        <p className="text-sm whitespace-nowrap animate-bounce">{textHeader}</p>
        <button onClick={onClick} className="pr-2 text-sm ">
          close
        </button>
      </div>
      <div className="min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] w-full mt-[-0.15rem]" />
    </>
  );
};

export default DragCloseMenu;
