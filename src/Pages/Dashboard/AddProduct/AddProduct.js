import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const handleAddProduct = (event) => {};
  return (
    <div className="w-1/2 mx-auto mt-12">
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Input your email" })}
            className="input input-bordered w-full "
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
