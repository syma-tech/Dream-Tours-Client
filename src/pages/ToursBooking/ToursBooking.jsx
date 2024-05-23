import { useLoaderData } from "react-router-dom";
import BookingForm from "./BookingForm";

const ToursBooking = () => {
  const loadedTourData = useLoaderData();
  // console.log(loadedTourData);
  const { _id, img, name, location, shortDescription, bigDescription } =
    loadedTourData;

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full rounded-badge" src={img} alt="Train on hell" />
        </figure>
        <div className="card-body">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center rounded-3xl ring-1 ring-gray-200 p-20 lg:mx-0  lg:max-w-none ">
                <h2 className="text-3xl font-bold tracking-tight text-purple-900 sm:text-4xl">
                  {name}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {shortDescription}
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {location}
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {bigDescription}
                  </p>
                </div>
                <BookingForm
                  title={name}
                  location={location}
                  _id={_id}
                  img={img}
                />
              </div>
            </div>
          </div>

          {/* <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ToursBooking;
