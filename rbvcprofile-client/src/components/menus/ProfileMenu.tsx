import DefaultBtn from "../buttons/DefaultBtn";

const ProfileMenu = () => {
  return (
    <>
      <p className="md:hidden min-w-[21rem] max-w-[39.5rem] text-sm w-full text-end cursor-pointer">
        dragme
      </p>
      <div className="md:hidden min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] w-full" />
      <div className="flex justify-between">
        <DefaultBtn textBtn="Home" styleBtn=" self-center " />
        <DefaultBtn textBtn="About" styleBtn=" self-center" />
        <DefaultBtn textBtn="Portifolio" styleBtn="self-center " />
        <DefaultBtn textBtn="Contact" styleBtn=" self-center " />
        <DefaultBtn textBtn="Hire" styleBtn=" self-center" />
      </div>
    </>
  );
};

export default ProfileMenu;
