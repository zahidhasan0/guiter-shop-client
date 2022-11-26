import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { AuthProvider } from "../Context/AuthContext";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const [isSeller, sellerLoading] = useSeller(user?.email);
  console.log(isSeller);
  const location = useLocation();

  if (loading || sellerLoading) {
    return <Loader />;
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
