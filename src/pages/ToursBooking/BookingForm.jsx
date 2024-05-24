import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const BookingForm = ({ _id, location, img, title }) => {
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;

    // console.log(name, date, location);

    const touristBooking = {
      customerName: name,
      email: user?.email,
      date,
      service_id: _id,
      location,
      img,
      title,
    };
    console.log(touristBooking);

    fetch("https://dream-tour-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Tour Booking Successful");
        }
      });
  };
  return (
    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
      <div className="rounded-2xl bg-white py-10 text-center ring-1 ring-inset ring-gray-300 lg:flex lg:flex-col lg:justify-center lg:py-16">
        {/* <div className="mx-auto max-w-xs px-8"> */}
        <form onSubmit={handleBooking} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="Add Date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Booking Now</button>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default BookingForm;
