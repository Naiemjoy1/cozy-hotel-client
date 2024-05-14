import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/FirebaseProvider/FirebaseProvider";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://hotel-booking-server-lake.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    // Proceed with deletion directly
    fetch(`https://hotel-booking-server-lake.vercel.app/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          // alert("Deleted successfully");
          toast.success("Deleted successfully");
          // Remove the deleted booking from the state
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        }
      })
      .catch((error) => {
        console.error("Error deleting booking:", error);
        // alert("An error occurred while deleting the booking.");
        toast.error("An error occurred while deleting the booking.");
      });
  };

  const handleCancel = (id) => {
    // Proceed with cancellation request
    fetch(
      `https://hotel-booking-server-lake.vercel.app/bookings/${id}/cancel`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Booking canceled successfully") {
          // Update bookings state to remove canceled booking
          const updatedBookings = bookings.filter(
            (booking) => booking._id !== id
          );
          setBookings(updatedBookings);
          // alert("Booking canceled successfully.");
          toast.success("Booking cancel successfully");
        } else {
          // alert("Failed to cancel booking. Please try again later.");
          toast.error("Failed to cancel booking");
        }
      })
      .catch((error) => {
        console.error("Error canceling booking:", error);
        // alert("An error occurred while canceling the booking.");
        toast.error("An error occurred while canceling the booking.");
      });
  };

  return (
    <div className="min-h-[calc(100vh-327px)] flex justify-center gap-10 my-20">
      <div className="">
        <div className=" relative mb-10">
          <img className="w-full" src="" alt="" />
          <div className="absolute rounded-lg h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>
          <div className="absolute bottom-0 w-full pl-10"></div>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className=" text-black">
                <th>
                  <label>
                    {/* <input type="checkbox" className="checkbox" /> */}
                  </label>
                </th>
                <th></th>
                <th>BOOKING ROOM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <Cart
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleCancel={handleCancel}
                ></Cart>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="w-1/4 bg-primary text-white  p-10">
        <p className=" font-marcellus text-2xl">Cart totals</p>
        <div className="divider divider-secondary"></div>
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p>Subtotal</p>
        </div>
        <div className="divider divider-secondary"></div>
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p>Subtotal</p>
        </div>
        <div className="divider divider-secondary"></div>
      </div> */}
      <ToastContainer />
    </div>
  );
};

export default Bookings;
