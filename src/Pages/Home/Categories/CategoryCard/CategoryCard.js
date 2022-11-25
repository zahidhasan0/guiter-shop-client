import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, name, img } = category;
  console.log(_id);
  return (
    <Link to={`/categories/${_id}`}>
      <div className="card  h-[400px] rounded-lg bg-base-100 shadow-xl">
        <figure className="  ">
          <img src={img} alt="guitar" className="rounded-lg" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
