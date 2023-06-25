import { Outlet } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import useVisible from "../hooks/useVisible";

const Layout = () => {
  return (
    <div className="container h-full sm:w-3/4 mx-auto bg-white">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
