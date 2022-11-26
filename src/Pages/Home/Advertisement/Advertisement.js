import React from "react";
import Slider from "react-slick";

const Advertisement = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <h3 className="text-3xl font-bold">Most Seller In this Week</h3>
      <div>
        
      </div>
    </div>
  );
};

export default Advertisement;
