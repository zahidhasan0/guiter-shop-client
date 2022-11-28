import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="w-1/4 mx-auto text-center mt-52">
      <h1 className="text-5xl  font-bold">Oops!!!</h1>
      <h2 className="text-3xl font-semibold my-5 text-error">{error.status}</h2>
      <h2 className="text-xl font-bold text-error">{error.statusText}</h2>
    </div>
  );
};

export default ErrorPage;
