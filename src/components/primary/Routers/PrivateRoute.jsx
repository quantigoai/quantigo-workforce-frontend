import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({ roles }) => {
  const { role } = useSelector((state) => state.user.user);
  const mainRole = roles.find((roles) => roles === role);

  return mainRole ? <Outlet /> : <Navigate to="/"></Navigate>;
};

export default PrivateRoute;
