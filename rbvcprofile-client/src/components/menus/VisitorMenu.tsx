import DefaultBtn from "../buttons/DefaultBtn";

const VisitorMenu = () => {
  return (
    <>
      <p className="min-w-[21rem] max-w-[39.5rem] text-sm w-full text-end cursor-pointer">
        dragme
      </p>
      <div className="min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] w-full" />
      <div className="conainer flex min-w-[21rem] max-w-[39.5rem] justify-around">
        <DefaultBtn textBtn="Sign In" styleBtn=" self-center " />
        <DefaultBtn textBtn="Sign Up" styleBtn=" self-center" />
        <DefaultBtn textBtn="Comments" styleBtn="self-center " />
      </div>
    </>
  );
};

export default VisitorMenu;
