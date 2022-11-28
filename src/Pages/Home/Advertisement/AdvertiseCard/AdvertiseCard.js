import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { AuthProvider } from "../../../../Context/AuthContext";

const AdvertiseCard = ({ advertise, setProduct }) => {
  const { user } = useContext(AuthProvider);
  const { img, name, resalePrice, yearsOfUse, location } = advertise;
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
          <label
            onClick={() => setProduct(advertise)}
            htmlFor="advertiseModal"
            className="btn btn-primary btn-sm"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
