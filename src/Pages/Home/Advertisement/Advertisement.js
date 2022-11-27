import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { AuthProvider } from "../../../Context/AuthContext";
import ProductBookModal from "../../Products/ProductBookModal/ProductBookModal";
import AdvertiseCard from "./AdvertiseCard/AdvertiseCard";

const Advertisement = () => {
  const { signleProduct, setSingleProduct } = useContext(AuthProvider);
  const { data: advertises = [], refetch } = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise");
      const data = res.json();
      return data;
    },
  });

  const handleAdBook = (handleBook) => {
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(handleBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleAdDelete(handleBook);
      });
  };

  const handleAdDelete = (handleBook) => {
    fetch(`http://localhost:5000/advertise/${handleBook._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log(advertises);

  return (
    <>
      {advertises.length && (
        <>
          <div>
            <h3 className="text-3xl font-bold">Most Seller In this Week</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {advertises &&
                advertises.map((advertise) => (
                  <AdvertiseCard
                    key={advertise._id}
                    handleAdBook={handleAdBook}
                    advertise={advertise}
                  ></AdvertiseCard>
                ))}
            </div>
          </div>
          <ProductBookModal
            signleProduct={signleProduct}
            setSingleProduct={setSingleProduct}
          ></ProductBookModal>
        </>
      )}
    </>
  );
};

export default Advertisement;
