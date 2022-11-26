import { useQuery } from "@tanstack/react-query";
import React from "react";
import Slider from "react-slick";
import AdvertiseCard from "./AdvertiseCard/AdvertiseCard";

const Advertisement = () => {
  const { data: advertises = [] } = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertise");
      const data = res.json();
      return data;
    },
  });

  console.log(advertises);

  return (
    <div>
      <h3 className="text-3xl font-bold">Most Seller In this Week</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {advertises &&
          advertises.map((advertise) => (
            <AdvertiseCard
              key={advertise._id}
              advertise={advertise}
            ></AdvertiseCard>
          ))}
      </div>
    </div>
  );
};

export default Advertisement;
