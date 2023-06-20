import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./components/Login";
import SignedInLayout from "./components/SignedInLayout";

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
