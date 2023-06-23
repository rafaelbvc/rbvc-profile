import React, { useEffect, useState } from "react";
import ProfileCollapsedBtn from "../buttons/ProfileCollapsedBtn";
import GetStartedCollapsedBtn from "../buttons/GetStartedCollapsedBtn";
import DefaultBtn from "../buttons/DefaultBtn";

const NavBar = () => {


  return (
    <nav className="container fixed flex justify-between h-[3rem] w-full sm:mt-6 sm:w-3/4  p-1 z-50 " >
      {/*personal secction */}
      <div className="rotate-315 cursor-pointer ">
        <ProfileCollapsedBtn widthSVG={36} fillColor="black" />
      </div>
      {/*welcome visitor and auth secction*/}
      <div className="self-center  p-1 cursor-pointer">
        <GetStartedCollapsedBtn />
        {/* <p className="hidden">SignIn</p>
        <p className="hidden">SignUp</p>
        <p className="hidden">Please coment</p>
        <p className="hidden">leave me a tip</p> */}
      </div>
    </nav>
  );
};

export default NavBar;


  // const content = () => {
  //   return (
  //     <div className="block  m-auto">
  //       <ul className="grid grid-rows-4 max-w-[240px]">
  //         <DefaultBtn textBtn={"About Me"} hiddenBtn={false} />
  //         <DefaultBtn textBtn={"Portifolio"} hiddenBtn={false} />
  //         <DefaultBtn textBtn={"Contact"} hiddenBtn={false} />
  //         <DefaultBtn textBtn={"Wanna hire me?"} hiddenBtn={false} />
  //       </ul>
  //     </div>
  //   );
  // };
  // useEffect(() => {
  //   // content();
  // }, []);