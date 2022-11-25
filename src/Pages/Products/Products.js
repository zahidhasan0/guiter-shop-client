import React from "react";
import { useLoaderData } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import ProductBookModal from "./ProductBookModal/ProductBookModal";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default Products;
