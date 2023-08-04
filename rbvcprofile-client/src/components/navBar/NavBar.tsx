import GetStartedCollapsedBtn from "../buttons/GetStartedCollapsedBtn";
import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import ProfileMenu from "../menus/ProfileMenu";
import RBVCLogoBtn from "../buttons/RBVCLogoBtn";
import { handleVisibility } from "../../utils/visibilityHandler";

const NavBar = () => {
  const { pvisibility, setPVisibilityState, vvisibility, setVVisibilityState } =
    useVisibilityContext();

  return (
    <nav className="container px-1 fixed flex justify-between h-[5rem] w-screen   bg-dtBgMainColor  z-10 ">
      {/*personal secction */}
      <RBVCLogoBtn
        onClick={() => setPVisibilityState(handleVisibility(pvisibility))}
      />

      <div className="hidden md:flex">
        <ProfileMenu />
      </div>

      {/*welcome visitor and auth secction*/}
      <div className="p-1 pt-2 cursor-pointer self-center">
        <GetStartedCollapsedBtn
          onClick={() => setVVisibilityState(handleVisibility(vvisibility))}
        />
      </div>
    </nav>
  );
};

export default NavBar;
