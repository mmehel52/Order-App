import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const currentUser = localStorage.getItem("posUser");
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
