import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import ProductBookModal from "../../Products/ProductBookModal/ProductBookModal";

const Wishlist = () => {
  const { data: wishlist, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await fetch("https://guitar-shop-server.vercel.app/wishlist");
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loader />;
  }
  return (
    <div className="overflow-x-auto">
      <h3 className="text-2xl font-bold text-primary border-b-4 border-primary my-6 text-center pb-2">
        My Wishlist
      </h3>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Index</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Book Now</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist.map((wishProduct, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src={wishProduct.img} alt="" />
                    </div>
                  </div>
                </th>
                <td>{wishProduct.name}</td>
                <td>${wishProduct.resalePrice}</td>

                <td>
                  <label
                    htmlFor="product-book-modal"
                    className="btn btn-primary btn-sm"
                  >
                    Book Now
                  </label>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
