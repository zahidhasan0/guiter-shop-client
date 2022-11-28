import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { AuthProvider } from "../../../Context/AuthContext";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const { user, loading } = useContext(AuthProvider);

  const navigate = useNavigate();
  const imgHostKey = process.env.REACT_APP_imgbbKey;

  const date = new Date();
  const postDate = format(date, "Pp");

  const handleAddProduct = (data) => {
    console.log(data.productCategory);
    const productInfo = {
      categoryId: data.productCategory,
      img: data.productImg,
      name: data.productName,
      originalPrice: data.productOriginalPrice,
      resalePrice: data.productResalePrice,
      location: data.location,
      productCondition: data.productCondition,
      description: data.description,
      useTime: data.useTime,
      sellerName: user?.displayName,
      salePostDate: postDate,
      sellerEmail: user?.email,
    };
    if (loading) {
      <Loader />;
    }
    fetch("http://localhost:5000/allproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added successfully");
          navigate(`/categories/${productInfo.categoryId}`);
        }
      });
  };
  return (
    <div className="w-1/2 mx-auto my-12">
      <h3 className="text-2xl font-bold text-primary">Add a Product</h3>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("productName", { required: "Input Product Name" })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <select
            {...register("productCategory", { required: "Input Product Name" })}
            className="select select-primary w-full "
          >
            <option disabled selected>
              Select Category
            </option>
            <option value={"637f2d6ffb4164d5ed1bbbb3"}>Acoustic</option>
            <option value={"637f2d6ffb4164d5ed1bbbb4"}>Electro Acoustic</option>
            <option value={"637f2d6ffb4164d5ed1bbbb5"}>Electric</option>
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="url"
            {...register("productImg", {
              required: "Product image is required",
            })}
            className="input input-bordered input-primary w-full "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Condition</span>
          </label>
          <select
            {...register("productCondition", {
              required: "Product condition is required",
            })}
            className="select select-primary w-full "
          >
            <option disabled selected>
              Select Conditon
            </option>
            <option value={"Excellent"}>Excellent</option>
            <option value={"good"}>Good</option>
            <option value={"Fair"}>Fair</option>
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">
              Product Original Price in Dollar ($)
            </span>
          </label>
          <input
            type="text"
            {...register("productOriginalPrice", {
              required: "Input Product Price",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">
              Product Resale Price in Dollar ($)
            </span>
          </label>
          <input
            type="text"
            {...register("productResalePrice", {
              required: "Input Product Price",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: "Location required",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("description", {
              required: "Input Product description",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Use Time</span>
          </label>
          <input
            type="text"
            {...register("useTime", {
              required: "Input year of purchase",
            })}
            className="input input-bordered w-full "
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary text-white  w-full my-5"
        />
      </form>
    </div>
  );
};

export default AddProduct;
