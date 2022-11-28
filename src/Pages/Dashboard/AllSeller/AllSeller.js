import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const AllSeller = () => {
  const { data: allSeller = [], refetch } = useQuery({
    queryKey: ["allseller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allseller");
      const data = res.json();
      return data;
    },
  });
  console.log(allSeller);

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure to delete this Seller?");
    if (agree) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("The seller deleted successfully");
            refetch();
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto mb-6">
      <h3 className="text-2xl font-bold text-primary border-b-4 border-primary my-6 text-center pb-2">
        All Seller
      </h3>

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
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-error btn-sm text-white"
                  >
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
