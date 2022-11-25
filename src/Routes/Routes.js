import DashboardLayout from "../LayOut/DashboardLayout";
import Main from "../LayOut/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import MyBuyers from "../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/categories/:id",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allproducts/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/myorders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/mybuyers",
        element: <MyBuyers />,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSeller />,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers />,
      },
      {
        path: "/dashboard/reporteditems",
        element: <ReportedItems />,
      },
    ],
  },
]);
