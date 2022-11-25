import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "./CategoryCard/CategoryCard";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mt-24">
      <h3 className="text-3xl font-bold text-primary mb-5">Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {categories &&
          categories.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
      </div>
    </div>
  );
};

export default Categories;
