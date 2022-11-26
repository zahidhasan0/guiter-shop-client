import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { AuthProvider } from "../Context/AuthContext";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const [isAdmin, adminLoading] = useAdmin(user?.email);
  console.log(isAdmin);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
