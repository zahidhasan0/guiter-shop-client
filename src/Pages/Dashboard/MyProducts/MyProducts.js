import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Loader from "../../../Components/Loader/Loader";
import { AuthProvider } from "../../../Context/AuthContext";

const MyProducts = () => {
  const { user } = useContext(AuthProvider);
  console.log(user);

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      if (user) {
        const res = await fetch(
          `https://guitar-shop-server.vercel.app/myproducts?email=${user?.email}`
        );
        const data = res.json();
        return data;
      }
    },
  });
  console.log(myProducts);

  const handleAddAd = (product) => {
    console.log(product);
    fetch("https://guitar-shop-server.vercel.app/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Product added in advertise successfully");
        }
      });
  };

  const handleStatus = (id) => {
    console.log(id);
    fetch(`https://guitar-shop-server.vercel.app/myproducts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-primary border-b-4 border-primary my-6 text-center pb-2">
        My Products
      </h3>
      <table className="table w-full">
        <thead>
          <tr className="font-bold">
            <th>Index</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myProducts &&
            myProducts.map((product, i) => (
              <tr className="font-semibold" key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.name}
                  <br />
                </td>
                <td>
                  $ {product.resalePrice}
                  <br />
                </td>
                <td>
                  {product.status === "sold" ? (
                    <button
                      onClick={() => handleStatus(product._id)}
                      className="btn btn-primary btn-xs"
                    >
                      Sold
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatus(product._id)}
                      className="btn btn-primary btn-xs"
                    >
                      Available
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleAddAd(product)}
                    className="btn btn-primary btn-xs"
                  >
                    Add in Ad.
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
