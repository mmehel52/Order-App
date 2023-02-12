import { Route, Routes } from "react-router-dom";
import Bills from "../pages/Bills";
import Card from "../pages/Card";
import Customers from "../pages/Customers";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  );
};

export default AppRouter;
