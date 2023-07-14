import { Outlet } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import { useEffect, useState } from "react";

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
    <main className="container  h-full mx-auto bg-white">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
