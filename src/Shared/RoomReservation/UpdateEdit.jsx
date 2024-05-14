import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/FirebaseProvider/FirebaseProvider";
import { toast } from "react-toastify";

const UpdateEdit = ({ _id, cancelBooking }) => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:3000/bookings");
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        // Filter bookings by user's email
        const filteredBookings = data.filter(
          (booking) => booking.email === user?.email
        );
        setBookings(filteredBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error.message);
      }
    };

    fetchBookings();

    return () => {};
  }, [user]);

  const isMatchingId = bookings.some((booking) => booking.room_id === _id);

  return (
    <div>
      {isMatchingId && (
        <div className="flex justify-between items-center gap-4">
          <Link to={`/update/${_id}`}>
            <button className="btn btn-secondary text-white mb-5">
              Update
            </button>
          </Link>
          {/* <button
            onClick={() => cancelBooking(_id)}
            className="btn btn-secondary bg-red-600 border-none text-white mb-5"
          >
            Cancel
          </button> */}
        </div>
      )}
    </div>
  );
};

export default UpdateEdit;
