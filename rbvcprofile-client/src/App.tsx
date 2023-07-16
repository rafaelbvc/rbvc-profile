import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignedInLayout from "./components/screens/visitors/SignedInLayout";
import Public from "./components/Public";
import VisibilityContext from "./contexts/useVisibilityContext";

function App() {
  return (
    <VisibilityContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="SignedInLayout" element={<SignedInLayout />} />
        </Route>
      </Routes>
    </VisibilityContext>
  );
}

export default App;
