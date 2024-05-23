import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/SignUp/SignUp/SignUp";
import ToursBooking from "../pages/ToursBooking/ToursBooking";

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
        element: <ToursBooking />,
        loader: ({ params }) =>
          fetch(`https://dream-tour-server.vercel.app/tours/${params.id}`),
      },
    ],
  },
]);

export default router;
