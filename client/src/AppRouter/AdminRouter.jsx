import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRouter = () => {
  const currentUser = localStorage.getItem("posUser");
  return currentUser.isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminRouter;
