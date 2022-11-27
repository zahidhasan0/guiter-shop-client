import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { AuthProvider } from "../../Context/AuthContext";
import ProductBookModal from "./ProductBookModal/ProductBookModal";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const products = useLoaderData();
  const { user, signleProduct, setSingleProduct } = useContext(AuthProvider);

  console.log(products);
  return (
    <div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product._id}
              setSingleProduct={setSingleProduct}
              product={product}
            >
              {" "}
            </ProductCard>
          ))}
      </div>
      {signleProduct && (
        <ProductBookModal
          signleProduct={signleProduct}
          setSingleProduct={setSingleProduct}
        ></ProductBookModal>
      )}
    </div>
  );
};

export default Products;
