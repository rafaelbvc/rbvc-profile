import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./navBar/NavBar";

const Layout = () => {
  const [swidth] = useState<number>(window.innerWidth);

  const handleSWidth = (w: number) => {
    if (w < 340) {
      // todo chamar pagina erro
      alert("fora do tamanho suportado");
    }
    return;
    //todo minimal page with AboutOnly
  };

  useEffect(() => {
    handleSWidth(swidth);
  }, [swidth]);

  return (
    <main className="container w-screen h-full  mx-auto overflow-x-hidden lg:overflow-hidden">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
