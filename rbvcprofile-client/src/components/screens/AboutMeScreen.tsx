import { useEffect } from "react";
import { useVisibilityContext } from "../../contexts/VisibilityContext";
import DragCloseMenu from "../menus/DragCloseMenu";

const AboutMeScreen = () => {
  const { setAboutVisibilityState } = useVisibilityContext();

  return (
    <>
      <DragCloseMenu
        textHeader={"about me"}
        onClick={() => setAboutVisibilityState(" hidden")}
      />
      <div className="container flex flex-col min-w-[21rem] max-w-[39.5rem] p-2">
        <div className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          tempore sequi quis aspernatur labore aliquid. Recusandae amet sapiente
          aspernatur sint expedita nulla alias impedit aperiam ea, consequatur
          eligendi. Accusantium, porro?
        </div>
        <img
          src="https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000"
          alt="Lion"
        />
      </div>
    </>
  );
};

export default AboutMeScreen;
