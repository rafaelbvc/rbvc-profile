import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import SignedInLayout from "./components/SignedInLayout";
import Public from "./components/Public";
import VisibilityContext from "./contexts/useVisibilityContext";

function App() {
  return (
    <VisibilityContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
          <Route path="SignedInLayout" element={<SignedInLayout />} />
        </Route>
      </Routes>
    </VisibilityContext>
  );
}

export default App;
