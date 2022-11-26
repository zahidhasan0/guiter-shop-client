import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import Loader from "../../../Components/Loader/Loader";
import { AuthProvider } from "../../../Context/AuthContext";

const MyOrders = () => {
  const { user } = useContext(AuthProvider);
  const email = user?.email;
  console.log(email);

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  console.log(orders);

  return (
    <div className="overflow-x-auto my-6 w-full">
      <table className="table w-full">
        <thead>
          <tr className="font-bold">
            <th>Index</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order, i) => (
              <tr className="font-semibold" key={order._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {order.guiterName}
                  <br />
                </td>
                <td>${order.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
