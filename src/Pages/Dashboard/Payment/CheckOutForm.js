import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ booking }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transictionId, setTransictionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  console.log(booking);
  const { price, userName, userEmail, _id } = booking;
  useEffect(() => {
    fetch("https://guitar-shop-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      setError("");
    }

    setSuccess("");
    setProcessing(true);

    const { paymentIntent, paymentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      }
    );
    if (paymentError) {
      setError(paymentError.message);
    }
    console.log(paymentIntent);
    const payment = {
      price,
      transictionId: paymentIntent.id,
      userEmail,
      bookingId: _id,
    };
    if (paymentIntent.status === "succeeded") {
      fetch("https://guitar-shop-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! your payment complete");
            setTransictionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <div className="w-2/3">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-primary mt-5 btn-sm"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{error}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Transiction Id: <span className="font-bold"> {transictionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
