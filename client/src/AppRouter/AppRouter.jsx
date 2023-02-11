import { Route, Routes } from "react-router-dom";
import Bills from "../pages/Bills";
import Card from "../pages/Card";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card />} />
      <Route path="/bills" element={<Bills />} />
    </Routes>
  );
};

export default AppRouter;
