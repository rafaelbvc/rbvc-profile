import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import FooterBar from "../FooterBar";
import DragCloseMenu from "../menus/DragCloseMenu";
import UnderConstructionSVG from "../svg/UnderConstructionSVG";

const HireScreen = () => {
  const { setHireVisibilityState } = useVisibilityContext();

  return (
    <section className="flex flex-col max-w-[24.5rem] sm:max-w-none">
      <DragCloseMenu
        textHeader="hire me"
        onClick={() => setHireVisibilityState(" hidden")}
      />
      <div className="flex flex-col bg-dGrayBGScreens rounded min-w-[21rem] max-w-[39.5rem] p-2">
        <p className="text-right font-poppins text-dGrayTitle">
          Sorry, this area is under construction... <br /> Soon...
        </p>
        <UnderConstructionSVG widthSVG="23.5rem" />
      </div>
      <FooterBar />
    </section>
  );
};

export default HireScreen;
