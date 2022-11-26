import { useQuery } from "@tanstack/react-query";
import React from "react";
import Slider from "react-slick";

import BannerData from "./BannerData/BannerData";

const Banner = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  const settings = {
    clasName: "center",
    dots: true,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 30000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div className="mt-12">
      <Slider {...settings}>
        {categories &&
          categories.map((category) => (
            <BannerData key={category._id} category={category}></BannerData>
          ))}
      </Slider>
    </div>
  );
};

export default Banner;
