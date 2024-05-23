import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-100 my-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img
            src="https://iili.io/JiDcoHx.webp"
            className="w-full rounded-lg shadow-none"
          />
        </div>
        <div className="w-1/2 space-y-10">
          <h3 className="text-3xl font-bold ">About Us</h3>
          <h2 className="leading-snug text-5xl font-normal">
            We are Professional Planners For your Vacations
          </h2>
          <p className="text-gray-600 text-lg leading-9 mb-10">
            Dream Tour is a tour operator in Bangladesh that brings you the
            places to visit in Dhaka as well as the places to visit in
            Bangladesh. We will guide you for visiting the tourist spots,
            historical places in Bangladesh, ecotourism sites in Bangladesh and
            World Heritage Sites in Bangladesh.
            <br />
            <br />
            Dream Tour Team is here to make your journey affordable, enjoyable
            and memorable. If you are a tourist or foreign citizen, just get in
            touch with us and we will take the work to handle your Visa
            Processing, Air-Ticketing, Hotel-Booking, Tourist Transport and
            tour-package planning that will be suitable for you.
          </p>
          <button className="btn btn-primary">Get Explore</button>
        </div>
      </div>
    </div>
  );
};

export default About;
