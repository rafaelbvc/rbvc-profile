import { Outlet } from "react-router-dom";

const SignedInLayout = () => {
  return (
    <>
      <div className="signedin-layout">
        <Outlet />
      </div>
    </>
  );
};

export default SignedInLayout;
