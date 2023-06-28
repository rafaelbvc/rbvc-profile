const GetStartedCollapsedBtn = ({onClick}) => {

  return (
    <button
      onClick={onClick}
      className="flex self-center flex-nowrap"
    >
     <p className="whitespace-nowrap font-popins text-xl font-semibold">Get</p> 
     <p className="whitespace-nowrap font-popins text-xl font-semibold text-dGolden ml-1">Started</p>
    </button>
  );
};

export default GetStartedCollapsedBtn;

