import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>{user?.email && <Link to="/myBookings">My Bookings</Link>}</li>
      <li>
        {user?.email && (
          <Link to="/manageAllBookings">Manage All Bookings</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to="/"
          className="font-bold block font-mono  text-3xl text-primary"
        >
          Dream Tour
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <button onClick={handleLogOut} className="btn btn-primary">
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary font-mono font-bold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
