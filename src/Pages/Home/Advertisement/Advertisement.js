import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";

import { AuthProvider } from "../../../Context/AuthContext";

import AdvertiseCard from "./AdvertiseCard/AdvertiseCard";
import AdvertiseModal from "./AdvertiseModal/AdvertiseModal";

const Advertisement = () => {
  const [product, setProduct] = useState(null);
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
      {advertises.length > 0 && (
        <div className="mt-12">
          <div>
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Most Seller In this Week
              </h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {advertises &&
                  advertises.map((advertise) => (
                    <AdvertiseCard
                      key={advertise._id}
                      setProduct={setProduct}
                      handleAdBook={handleAdBook}
                      advertise={advertise}
                    ></AdvertiseCard>
                  ))}
              </div>
            </div>
          </div>
          {product && (
            <AdvertiseModal
              product={product}
              setProduct={setProduct}
            ></AdvertiseModal>
          )}
        </div>
      )}
    </>
  );
};

export default Advertisement;
