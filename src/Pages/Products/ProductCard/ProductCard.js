import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product, setSingleProduct }) => {
  const [isWishListed, setIsWishListed] = useState(false);
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

  const wishlistProduct = {
    name,
    img,
    originalPrice,
    resalePrice,
    location,
    salePostDate,
    useTime,
    sellerName,
  };

  const handleWishlist = (product) => {
    fetch(`http://localhost:5000/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Successfully added in the wishlist");
          setIsWishListed(true);
        }
      });
  };

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
          <div className="card-actions justify-around mt-3 items-center">
            <button
              title={
                isWishListed
                  ? "Already add in the wishlist"
                  : "click to add in the wishlist"
              }
              disabled={isWishListed}
              onClick={() => handleWishlist(wishlistProduct)}
              className="text-red-600 mr-4 text-3xl"
            >
              <FaHeart />
            </button>
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
