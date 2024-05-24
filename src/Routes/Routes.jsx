import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/SignUp/SignUp/SignUp";
import ToursBooking from "../pages/ToursBooking/ToursBooking";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import ManageAllBookings from "../pages/ManageAllBookings/ManageAllBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/tours/:id",
        element: (
          <PrivateRoute>
            <ToursBooking />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://dream-tour-server.vercel.app/tours/${params.id}`),
      },

      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings />,
          </PrivateRoute>
        ),
      },
      {
        path: "/manageAllBookings",
        element: (
          <PrivateRoute>
            <ManageAllBookings />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
