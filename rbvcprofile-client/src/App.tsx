import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import SignedInLayout from "./components/SignedInLayout";
import Public from "./components/Public";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="SignedInLayout" element={<SignedInLayout />} />
      </Route>
    </Routes>
  );
}

export default App;
