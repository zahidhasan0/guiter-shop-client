import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const SignUp = () => {
  const [userRole, setUserRole] = useState({ role: "buyer" });
  const { signup, googleSignUp, updateUserProfile } = useContext(AuthProvider);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleBuyerOption = () => {
    setUserRole({ role: "buyer" });
  };
  const handleSellerOption = () => {
    setUserRole({ role: "seller" });
  };

  const { role } = userRole;

  const handleSignUp = (data) => {
    console.log(data.name);
    signup(data.email, data.password)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        updateUserProfile({
          displayName: data.name,
        });
        const user = {
          name: data.name,
          email: currentUser.email,
          role: role,
        };
        console.log(user);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success(`Successfully created ${role} user.`);
              navigate("/");
            }
          });
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin = () => {
    googleSignUp()
      .then((result) => {
        const currentUser = result.user;

        const user = {
          name: currentUser.displayName,
          email: currentUser.email,
          role: "buyer",
        };
        console.log(user);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success(`User created Successfully`);
              navigate("/");
            }
          });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="md:w-2/5 mx-auto my-12 shadow-xl border p-10">
      <h3 className="text-2xl font-bold text-center text-primary mb-5">
        Sign Up
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
        <div className="flex items-center gap-2">
          <input
            onClick={handleBuyerOption}
            type="radio"
            name="radio-1"
            className="radio radio-primary"
            defaultChecked
          />
          <label htmlFor="radio-1">Buyer Account</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            onClick={handleSellerOption}
            type="radio"
            name="radio-1"
            className="radio radio-primary"
          />
          <label htmlFor="radio-2">Seller Account</label>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            {...register("name", { required: "Input your name" })}
            className="input input-bordered w-full "
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 font-semibold" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Input your email" })}
            className="input input-bordered w-full "
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 font-semibold" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters or more",
              },
            })}
            className="input input-bordered w-full "
          />
          <label className="label">
            <span className="label-text">Forgot Password?</span>
          </label>
          {errors.password && (
            <p className="text-red-500 font-semibold" role="alert">
              {errors.password?.message}
            </p>
          )}
        </div>

        <input
          type="submit"
          value="Login"
          className="btn w-full btn-primary  text-white"
        />
      </form>
      <p className="mt-2">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-bold">
          Login
        </Link>
      </p>
      <button
        onClick={handleGoogleLogin}
        className="btn   w-full bg-white hover:bg-primary hover:text-white hover:border-white  mt-4 border-4 border-primary  text-primary font-bold"
      >
        <FaGoogle className="text-green-600"></FaGoogle>{" "}
        <span className="ml-2">Google Sign In</span>
      </button>
    </div>
  );
};

export default SignUp;
