import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Shared/Error/Error";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Room from "../Pages/Room/Room";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room",
        element: <Room></Room>,
      },
      {
        path: "/booking",
        element: <Bookings></Bookings>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
