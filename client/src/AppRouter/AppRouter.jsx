import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
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
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
