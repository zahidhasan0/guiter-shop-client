import React from "react";
import { Link } from "react-router-dom";

const AdvertiseCard = ({ advertise, handleAdBook }) => {
  const { img, name, resalePrice, yearsOfUse, location, categoryId } =
    advertise;
  return (
    <div className="card  h-[350px] bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <div>
          <p className="font-semibold">Use Time: {yearsOfUse} year/years.</p>
          <p className="font-semibold my-3">Price: {resalePrice}</p>
          <p className="font-semibold">Location: {location}</p>
        </div>

        <div className="card-actions mt-5 justify-end">
          <button
            onClick={() => handleAdBook(advertise)}
            htmlFor="product-book-modal"
            className="btn btn-primary"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
