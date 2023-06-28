import GetStartedCollapsedBtn from "../buttons/GetStartedCollapsedBtn";
import { useVisibilityContext } from "../../contexts/VisibilityContext";
import ProfileMenuD from "../menus/ProfileMenu";
import RBVCLogoBtn from "../buttons/RBVCLogoBtn";

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
  return (
    <nav className="container fixed  flex justify-between h-[5rem] w-full bg-dtBgMainColor px-2  z-50 ">
      {/*personal secction */}
      <RBVCLogoBtn
        onClick={() => setPVisibilityState(handlePVisibility(pvisibility))}
      />

      <div className="hidden md:flex">
        <ProfileMenuD />
      </div>

      {/*welcome visitor and auth secction*/}
      <div className="self-center p-1 cursor-pointer">
        <GetStartedCollapsedBtn
          onClick={() => setVVisibilityState(handleVVisibility(vvisibility))}
        />
      </div>
    </nav>
  );
};

export default NavBar;
