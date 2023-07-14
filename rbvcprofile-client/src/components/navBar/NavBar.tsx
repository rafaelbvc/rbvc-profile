import GetStartedCollapsedBtn from "../buttons/GetStartedCollapsedBtn";
import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import ProfileMenu from "../menus/ProfileMenu";
import RBVCLogoBtn from "../buttons/RBVCLogoBtn";
import { handleVisibility } from "../../utils/visibilityHandler";

const NavBar = () => {
  const { pvisibility, setPVisibilityState, vvisibility, setVVisibilityState } =
    useVisibilityContext();

  return (
    <nav className="container fixed  flex justify-between h-[5rem] w-full bg-dtBgMainColor px-2 z-10 ">
      {/*personal secction */}
      <RBVCLogoBtn
        onClick={() => setPVisibilityState(handleVisibility(pvisibility))}
      />

      <div className="hidden md:grid">
        <ProfileMenu />
      </div>

      {/*welcome visitor and auth secction*/}
      <div className="p-1 cursor-pointer">
        <GetStartedCollapsedBtn
          onClick={() => setVVisibilityState(handleVisibility(vvisibility))}
        />
      </div>
    </nav>
  );
};

export default NavBar;
