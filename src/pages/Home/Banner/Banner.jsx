const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <img
            src={`https://iili.io/Ji1Xdwx.webp`}
            className="max-w-full rounded-lg "
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-6xl leading-snug font-bold">
            Your Adventure Travel Experts In World!
          </h1>
          <p className="py-6 text-gray-500">
            Accompanying us, you have a trip full of experiences. With
            Dream_Tour, booking accommodation, resort villas, hotels
          </p>
          <button className="btn btn-ghost">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
