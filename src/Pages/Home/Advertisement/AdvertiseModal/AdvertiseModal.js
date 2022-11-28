import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../../../../Context/AuthContext";

const AdvertiseModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthProvider);
  const date = new Date();
  const bookingDate = format(date, "Pp");
  const {
    name,
    _id,
    img,
    originalPrice,
    resalePrice,
    location,
    salePostDate,
    useTime,
    sellerName,
    categoryName,
  } = product;

  console.log(product);

  const handleAdBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const guiterName = form.guitar_name.value;
    const img = form.img_url.value;

    const sellerName = form.seller_name.value;
    const price = form.price.value;
    const userName = form.user_name.value;
    const userEmail = form.user_email.value;
    const meetingLocation = form.location.value;
    const userPhone = form.phone.value;
    const bookingInfo = {
      guiterName,
      img,
      categoryName,
      sellerName,
      price,
      userName,
      userEmail,
      meetingLocation,
      userPhone,
      bookingDate,
    };
    fetch("https://guitar-shop-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("The guiter is booked");
          handleDeleteFromAd(_id);
          console.log(data);
          setProduct(null);
        }
      });
  };

  const handleDeleteFromAd = (id) => {
    fetch(`https://guitar-shop-server.vercel.app/advertise/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <input type="checkbox" id="advertiseModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="advertiseModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-semibold border-b-4 border-primary text-center pb-4 text-primary">
            Booking Informations
          </h3>
          <form onSubmit={handleAdBook}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Guitar Name</span>
              </label>
              <input
                type="text"
                name="guitar_name"
                defaultValue={name}
                disabled
                className="input  font-semibold input-bordered input-primary w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Guitar Image URL</span>
              </label>
              <input
                type="url"
                name="img_url"
                defaultValue={img}
                disabled
                className="input  font-semibold input-bordered input-primary w-full "
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="seller_name"
                defaultValue={sellerName}
                disabled
                placeholder=""
                className="input font-semibold input-bordered input-primary w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={resalePrice}
                disabled
                className="input font-semibold input-bordered input-primary w-full "
              />
            </div>

            <>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="user_name"
                  className="input font-semibold input-bordered input-primary w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  defaultValue={user?.email}
                  disabled
                  className="input font-semibold input-bordered input-primary w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Meeting Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Enter Meeting Location"
                  className="input input-bordered input-primary w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Your Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Enter Your Phone Number"
                  className="input input-bordered input-primary w-full "
                />
              </div>
            </>
            <button
              type="submit"
              className="btn btn-primary text-white font-bold mt-4 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseModal;
