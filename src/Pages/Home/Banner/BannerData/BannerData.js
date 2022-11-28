import React from "react";
import { Link } from "react-router-dom";

const BannerData = ({ category }) => {
  const { _id, name, banner_img, description, title } = category;
  return (
    <div
      className="hero h-[400px] "
      style={{ backgroundImage: `url(${banner_img})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{description}</p>
          <Link to={`/categories/${_id}`}>
            {" "}
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerData;
