import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import ProductBookModal from "./ProductBookModal/ProductBookModal";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const [signleProduct, setSingleProduct] = useState({});
  const products = useLoaderData();
  console.log(signleProduct);
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
      <ProductBookModal signleProduct={signleProduct}></ProductBookModal>
    </div>
  );
};

export default Products;
