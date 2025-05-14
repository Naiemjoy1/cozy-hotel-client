import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import BookingsUpdate from "../Components/update/BookingsUpdate";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Bookings from "../Pages/Bookings/Bookings";
import BookRoom from "../Pages/BookRoom/BookRoom";
import Cart from "../Pages/Cart/Cart";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Room from "../Pages/Room/Room";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Error from "../Shared/Error/Error";

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
        loader: () =>
          fetch("https://hotel-booking-server-lake.vercel.app/rooms"),
      },

      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://hotel-booking-server-lake.vercel.app/rooms"),
      },
      {
        path: "/update/:id",
        element: <BookingsUpdate></BookingsUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-lake.vercel.app/bookings/${params.id}`
          ),
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
      {
        path: "/roomdetails/:id",
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-lake.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-lake.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: "/bookroom/:id",
        element: <BookRoom></BookRoom>,
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-lake.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: "/cart/:id",
        element: <Cart></Cart>,
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-lake.vercel.app/rooms/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
