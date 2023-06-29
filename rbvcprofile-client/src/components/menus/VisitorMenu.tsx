import { useRef } from "react";
import { useVisibilityContext } from "../../contexts/VisibilityContext";
import DefaultBtn from "../buttons/DefaultBtn";
import DragCloseMenu from "./DragCloseMenu";

const VisitorMenu = () => {
  const { setVVisibilityState } = useVisibilityContext();

  const ref = useRef(null)

  const handleHome = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
    <span ref={ref}/>
    <div className="flex flex-col w-fit">
      <DragCloseMenu
        textHeader={"visitors"}
        onClick={() => setVVisibilityState(" hidden")}
      />
      <div className="conainer flex min-w-[21rem] max-w-[39.5rem] justify-around">
        <DefaultBtn textBtn="Home" styleBtn=" self-center " onClick={handleHome}/>
        <DefaultBtn textBtn="Sign In" styleBtn=" self-center " />
        <DefaultBtn textBtn="Sign Up" styleBtn=" self-center" />
        <DefaultBtn textBtn="Comments" styleBtn="self-center " />
      </div>
    </div>
    </>
  );
};

export default VisitorMenu;
