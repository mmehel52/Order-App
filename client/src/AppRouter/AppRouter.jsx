import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "../pages/Card";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
