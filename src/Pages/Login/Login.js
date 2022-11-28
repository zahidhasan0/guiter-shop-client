import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { AuthProvider } from "../../Context/AuthContext";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { login, googleSignUp, error, setError } = useContext(AuthProvider);
  const [loginEmail, setLoginEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(loginEmail);
  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setLoginEmail(data.email);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignUp()
      .then((result) => {
        const currentUser = result.user;
        setLoginEmail(currentUser.email);
        const user = {
          name: currentUser.displayName,
          email: currentUser.email,
          role: "buyer",
        };
        console.log(user);
        fetch("https://guitar-shop-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success(`User created successfully`);
            }
          });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="md:w-2/5 mx-auto my-12 border shadow-xl p-10">
      <h3 className="text-2xl font-bold text-center mb-5 text-primary">
        Login
      </h3>
      <div>
        {error && <p className="text-red-600 font-semibold">{error}</p>}
      </div>

      <form onSubmit={handleSubmit(handleLogin)}>
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
        Need an account?{" "}
        <Link to="/signup" className="text-primary font-bold ">
          Create Accout
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

export default Login;
