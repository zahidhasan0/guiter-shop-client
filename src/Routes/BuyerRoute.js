import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { AuthProvider } from "../Context/AuthContext";
import useBuyer from "../Hooks/useBuyer";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const [isBuyer, buyerLoading] = useBuyer(user?.email);
  console.log(isBuyer);
  const location = useLocation();

  if (loading || buyerLoading) {
    return <Loader />;
  }

  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
