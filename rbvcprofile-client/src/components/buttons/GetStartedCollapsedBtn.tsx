const GetStartedCollapsedBtn = ({onClick}) => {

  return (
    <button
      onClick={onClick}
      className="flex"
    >
     <p className="text-2xl font-semibold">Get</p> 
     <p className="text-2xl font-semibold text-dGolden ml-1">Started</p>
    </button>
  );
};

export default GetStartedCollapsedBtn;

