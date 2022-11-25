import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import ProductBookModal from "../ProductBookModal/ProductBookModal";

const ProductCard = ({ product, setSingleProduct }) => {
  const {
    _id,
    name,
    img,
    originalPrice,
    resalePrice,
    location,
    salePostDate,
    useTime,
    sellerName,
  } = product;

  return (
    <div>
      <div className="card  bg-base-100 shadow-lg">
        <figure className="h-[200px] ">
          <img src={img} className="h-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{name}</h2>

          <p>Seller Name : {sellerName}</p>
          <p>Location : {location}</p>
          <p>Use Time : {useTime}</p>
          <p>Resale Price : ${resalePrice}</p>
          <p>Original Price : ${originalPrice}</p>
          <p>Post on : {salePostDate}</p>
          <div className="card-actions justify-end">
            <label
              onClick={() => setSingleProduct(product)}
              htmlFor="product-book-modal"
              className="btn btn-primary btn-sm"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
