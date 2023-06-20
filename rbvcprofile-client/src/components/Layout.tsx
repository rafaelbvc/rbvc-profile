import { Outlet } from "react-router-dom";
import NavBar from "./navBar/NavBar";

const Layout = () => {
  return (
    <main className="container h-full sm:w-3/4 mx-auto bg-white">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
