import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSeller = () => {
  const { data: allSeller = [] } = useQuery({
    queryKey: ["allseller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allseller");
      const data = res.json();
      return data;
    },
  });
  console.log(allSeller);
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold text-center mb-4 text-primary border-b-4 border-primary pb-2 w-1/6">
        All Seller
      </h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;
