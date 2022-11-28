import React, { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setisBuyer] = useState(false);
  const [buyerLoading, setbuyerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://guitar-shop-server.vercel.app/users/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setisBuyer(data.isBuyer);
          setbuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, buyerLoading];
};

export default useBuyer;
