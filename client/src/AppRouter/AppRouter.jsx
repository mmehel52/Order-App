import { Route, Routes } from "react-router-dom";
import Card from "../pages/Card";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
};

export default AppRouter;
