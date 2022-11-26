import { useQuery } from "@tanstack/react-query";
import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const MyBuyers = () => {
  const { data: allBuyer = [] } = useQuery({
    queryKey: ["allbuyer"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allbuyer");
      const data = res.json();
      return data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-semibold text-center mb-4 text-primary border-b-4 border-primary pb-2 w-1/6">
          All Buyer
        </h2>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Make Admin</th>
              <th>Delete Buyer</th>
            </tr>
          </thead>
          <tbody>
            {allBuyer &&
              allBuyer.map((buyer, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>
                    <PrimaryButton>admin</PrimaryButton>
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
    </div>
  );
};

export default MyBuyers;
