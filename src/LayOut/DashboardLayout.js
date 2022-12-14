import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthProvider);

  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center">
        <label
          htmlFor="dashboardDrawer"
          tabIndex={0}
          className="btn pt-4 btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>

          <ul className="menu  w-48 bg-base-100 text-base-content">
            <h3 className="text-2xl text-center font-bold text-primary border-b-4 border-primary pb-2 w-32 mt-6">
              Dashboard
            </h3>
            {isBuyer && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
                <Link to="/dashboard/mywishlist">My Wishlist</Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybuyers">My Buyers</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allsellers">All Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reporteditems">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
