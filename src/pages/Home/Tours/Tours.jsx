import { useEffect, useState } from "react";
import Tour from "./Tour";

const Tours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("https://dream-tour-server.vercel.app/tours")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTours(data);
      });
  }, []);
  return (
    <div className="py-24">
      <div>
        <h2 className="text-5xl font-semibold text-left mb-20 ">
          Best of Tours
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tours.length === 0 ? (
          <span className="loading loading-bars loading-lg"></span>
        ) : (
          tours?.map((tour) => (
            <Tour key={tour?._id} tour={tour} />
            // <p>Tour</p>
          ))
        )}
      </div>

      {/* <ul>
        <li>1. thailand.</li>
        <li>2. colombo, Sri Lanka</li>
        <li>3. Dubai</li>
        <li>4. Kashmir , India</li>
        <li>5. MAldives</li>
        <li>7. Roma</li>
        <li>8.Singapore</li>
        <li>9.China</li>
      </ul> */}
    </div>
  );
};

export default Tours;
