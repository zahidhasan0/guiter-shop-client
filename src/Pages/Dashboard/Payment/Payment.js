import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripePK);
const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  return (
    <div className="w-1/2">
      <h3 className="text-2xl">
        Payment for <span className="font-bold">{booking.guiterName}</span>
      </h3>
      <h2 className="text-xl">
        Please pay <span className="font-bold">${booking.price}</span>
      </h2>

      <Elements stripe={stripePromise}>
        <CheckOutForm booking={booking} />
      </Elements>
    </div>
  );
};

export default Payment;
