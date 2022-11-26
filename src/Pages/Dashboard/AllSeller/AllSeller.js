import { useQuery } from "@tanstack/react-query";
import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

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
            <th>Email</th>
            <th>Make Admin</th>
            <th>Varify</th>
            <th>Delete Seller</th>
          </tr>
        </thead>
        <tbody>
          {allSeller &&
            allSeller.map((seller, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <PrimaryButton>Make admin</PrimaryButton>
                </td>
                <td>
                  <PrimaryButton>Verify</PrimaryButton>
                </td>
                <td>
                  <button className="btn btn-error btn-sm text-white">
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;
