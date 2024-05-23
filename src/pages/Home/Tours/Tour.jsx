import { Link } from "react-router-dom";

const Tour = ({ tour }) => {
  const { _id, img, location, name, shortDescription, bigDescription } = tour;
  // console.log(tour);
  // console.log(name);
  // const { _id, shortDescription, name } = tour;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-64 w-full" src={img} alt="tour area" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-Bold  ">{name}</h2>
        <p className="text-purple-800">{location}</p>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <Link to={`/tours/${_id}`} className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tour;
