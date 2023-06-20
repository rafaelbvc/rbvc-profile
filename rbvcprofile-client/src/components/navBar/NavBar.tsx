import React from "react";
import ProfileCollapsedBtn from "../buttons/ProfileCollapsedBtn";
import GetStartedCollapsedBtn from "../buttons/GetStartedCollapsedBtn";

const NavBar = () => {
  return (
    <nav className="container fixed flex justify-between h-[3rem] w-full sm:mt-6 sm:w-3/4 bg-red-200 p-1 z-50">
      {/*personal secction */}
      <div>
        <div className="rotate-315 cursor-pointer ">
          <ProfileCollapsedBtn widthSVG={36} fillColor="black" />
        </div>
        <p className="hidden">about me</p>
        <p className="hidden">portifolio</p>
        <p className="hidden">contact</p>
        <p className="hidden">wanna hire me?</p>
      </div>
      {/*welcome visitor and auth secction*/}
      <div className="self-center  p-1 cursor-pointer">
        <GetStartedCollapsedBtn />
        <p className="hidden">SignIn</p>
        <p className="hidden">SignUp</p>
        <p className="hidden">Please coment</p>
        <p className="hidden">leave me a tip</p>
      </div>
    </nav>
  );
};

export default NavBar;
