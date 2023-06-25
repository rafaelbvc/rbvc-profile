import ProfileCollapsedBtn from "../buttons/ProfileCollapsedBtn";
import GetStartedCollapsedBtn from "../buttons/GetStartedCollapsedBtn";

const NavBar = () => {

  return (
    <nav className="container fixed flex justify-between h-[3rem] w-full sm:w-3/4 pb-3  p-1 z-50 " >
      {/*personal secction */}
      <div className="rotate-315 cursor-pointer ">
        <ProfileCollapsedBtn widthSVG={36} fillColor="black" />
      </div>
      {/*welcome visitor and auth secction*/}
      <div className="self-center  p-1 cursor-pointer">
        <GetStartedCollapsedBtn />
      </div>
    </nav>
  );
};

export default NavBar;

