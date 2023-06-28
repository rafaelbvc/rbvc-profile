const AboutMeScreen = () => {
  return (
    <>
      <p className="min-w-[21rem] max-w-[39.5rem] text-sm w-full text-end cursor-pointer">
        dragme
      </p>
      <div className="min-w-[21rem] max-w-[39.5rem] bg-gradient-to-r from-dBlack via-dGolden to-dGolden h-[1px] w-full" />
      <div className="container flex flex-col min-w-[21rem] max-w-[39.5rem]  mx-1 p-2">
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
