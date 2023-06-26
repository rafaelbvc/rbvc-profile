import ProfileCollapsedBtn from "../buttons/ProfileCollapsedBtn";
import GetStartedCollapsedBtn from "../buttons/GetStartedCollapsedBtn";
import { useVisibilityContext } from "../../contexts/VisibilityContext";
import { useState } from "react";

const NavBar = () => {
  const { pvisibility, setPVisibilityState, vvisibility, setVVisibilityState } =
    useVisibilityContext();

  function handlePVisibility(p: string) {
    if (p === " hidden") {
      return " ";
    }
    return " hidden";
  }


  function handleVVisibility(v: string) {
    if (v === " hidden") {
      return " ";
    }
    return " hidden";
  }

  console.log(pvisibility, "p<>v", vvisibility);

  return (
    <nav className="container fixed flex justify-between h-[3rem] w-full sm:w-3/4 pb-3  p-1 z-50 ">
      {/*personal secction */}
      <div className="rotate-315 cursor-pointer ">
        <ProfileCollapsedBtn
          widthSVG={36}
          fillColor="black"
          onClick={() => setPVisibilityState(handlePVisibility(pvisibility))}
        />
      </div>
      {/*welcome visitor and auth secction*/}
      <div className="self-center  p-1 cursor-pointer">
        <GetStartedCollapsedBtn
          onClick={() => setVVisibilityState(handleVVisibility(vvisibility))}
        />
      </div>
    </nav>
  );
};

export default NavBar;
