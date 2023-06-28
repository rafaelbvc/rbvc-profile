import { Outlet } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import { useEffect, useState } from "react";





const Layout = () => {
  const [swidth] = useState<number>(window.innerWidth)

  const handleSWidth = (w: number) => {
    if(w < 340){
     // todo chamar pagina erro
     alert("fora do tamanho suportado")
    }
    return
  } 

  

  useEffect(()=> {
    handleSWidth(swidth)

  },[])

  return (
    <div className="container  h-full mx-auto bg-white">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
