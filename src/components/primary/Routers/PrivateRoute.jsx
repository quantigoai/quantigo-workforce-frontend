import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { role } = useSelector((state) => state.user.user);
  return role === "admin" ? children : <Navigate to="/"></Navigate>;
};

export default PrivateRoute;
