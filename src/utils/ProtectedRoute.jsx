import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = useSelector((state) => state.user);
  const isAuthenticated = user?.isAuthenticated;
  if (user.loading) return "Loading...";
  if (isAuthenticated) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = (props) => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login-register" />;
};

export default ProtectedRoute;
