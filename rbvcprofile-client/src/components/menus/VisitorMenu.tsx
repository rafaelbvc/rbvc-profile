import { useRef } from "react";
import { useVisibilityContext } from "../../contexts/VisibilityContext";
import DefaultBtn from "../buttons/DefaultBtn";
import DragCloseMenu from "./DragCloseMenu";

const VisitorMenu = () => {
  const { setVVisibilityState } = useVisibilityContext();

  const ref = useRef(null);

  const handleHome = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" flex flex-col">
      <span ref={ref} className="top-[5rem]" />
      <DragCloseMenu
        textHeader={"visitors"}
        onClick={() => setVVisibilityState(" hidden")}
        className={` lg:ml-[1rem] xl:ml-[1.2rem] 2xl:ml-[1.54rem]`}
      />
      <div className="grid grid-cols-4 bg-dGrayBGScreens  rounded">
        <DefaultBtn
          textBtn="Home"
          styleBtn=" self-center "
          onClick={handleHome}
        />
        <DefaultBtn textBtn="Sign In" styleBtn=" self-center" />
        <DefaultBtn textBtn="Sign Up" styleBtn=" self-center" />
        <DefaultBtn textBtn="Comments" styleBtn="self-center " />
      </div>
    </div>
  );
};

export default VisitorMenu;
