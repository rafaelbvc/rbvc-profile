import { useVisibilityContext } from "../../contexts/useVisibilityContext";
import FooterBar from "../FooterBar";
import DragCloseMenu from "../menus/DragCloseMenu";
import UnderBConstructionSVG from "../svg/UnderBConstructionSVG";

const PortifolioScreen = () => {
  const { setPortifolioVisibilityState } = useVisibilityContext();

  return (
    <>
      <DragCloseMenu
            changeMaxW={"max-w-[29rem]"}
        textHeader="portifolio"
        onClick={() => setPortifolioVisibilityState(" hidden")}
      />
      <div className="flex flex-col bg-dGrayBGScreens rounded items-center  min-w-[21rem] max-w-[39.5rem] p-2">
        <p className="text-right font-poppins text-dGrayTitle mb-2">
          Sorry, this area is under construction... Soon...
        </p>
        <UnderBConstructionSVG widthSVG="90%" />
      </div>
      <FooterBar />
    </>
  );
};

export default PortifolioScreen;
