import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Bills from "../pages/Bills";
import Card from "../pages/Card";
import Customers from "../pages/Customers";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Statistics from "../pages/Statistics";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRouter />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/card" element={<PrivateRouter />}>
        <Route path="" element={<Card />} />
      </Route>
      <Route path="/bills" element={<PrivateRouter />}>
        <Route path="" element={<Bills />} />
      </Route>
      <Route path="/customers" element={<PrivateRouter />}>
        <Route path="" element={<Customers />} />
      </Route>
      <Route path="/statistics" element={<PrivateRouter />}>
        <Route path="" element={<Statistics />} />
      </Route>
      <Route path="/products" element={<PrivateRouter />}>
        <Route path="" element={<Product />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
