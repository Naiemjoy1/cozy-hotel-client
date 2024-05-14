import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../Components/FirebaseProvider/FirebaseProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingsUpdate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const roomDetails = useLoaderData();

  const {
    numRooms: initialNumRooms,
    numAdults: initialNumAdults,
    numChildren: initialNumChildren,
  } = roomDetails;

  // Setting initial states
  const [numRooms, setNumRooms] = useState(initialNumRooms || 1);
  const [numAdults, setNumAdults] = useState(initialNumAdults || 1);
  const [numChildren, setNumChildren] = useState(initialNumChildren || 0);

  const {
    _id,
    checkInDate,
    checkOutDate,
    numChildrentotalCost,
    type,
    room_id,
    email,
    pricePerNight,
  } = roomDetails;

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleNumRoomsChange = (e) => {
    setNumRooms(parseInt(e.target.value));
  };

  const handleNumAdultsChange = (e) => {
    setNumAdults(parseInt(e.target.value));
  };

  const handleNumChildrenChange = (e) => {
    setNumChildren(parseInt(e.target.value));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedDetails = {
      checkInDate: startDate,
      checkOutDate: endDate,
      numRooms,
      numAdults,
      numChildren,
      totalCost: pricePerNight * numRooms,
      type: roomDetails.type,
      image: roomDetails.image,
      description: roomDetails.description,
      roomImages: roomDetails.roomImages,
      room_id: roomDetails._id,
      email: user?.email,
      user: user?.displayName,
      pricePerNight: roomDetails.pricePerNight,
    };

    // Log the submitted data
    console.log("Submitted Data:", updatedDetails);

    fetch(`http://localhost:3000/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedDetails),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to update booking");
        }
      })
      .then((data) => {
        console.log(data);
        alert("Update booked successfully");
      })
      .catch((error) => {
        console.error("Error updating booking:", error.message);
        alert("Failed to update booking");
      });
  };
  console.log("Price Per Night:", pricePerNight);
  console.log("Number of Rooms:", numRooms);

  const totalCost = pricePerNight * numRooms;

  return (
    <div className="min-h-[calc(100vh-246px)] container mx-auto">
      <h2 className="text-4xl font-marcellus text-center">Update Booking</h2>
      <p>{pricePerNight}</p>
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Check-in Date:</span>
          </label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            className="input input-bordered mt-1 w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text ">Check-out Date:</span>
          </label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            className="input input-bordered mt-1 w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text ">Rooms:</span>
          </label>
          <select
            value={numRooms}
            onChange={handleNumRoomsChange}
            className="select select-bordered mt-1"
            required
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Adults:</span>
          </label>
          <select
            value={numAdults}
            onChange={handleNumAdultsChange}
            className="select select-bordered mt-1"
            required
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Children:</span>
          </label>
          <select
            value={numChildren}
            onChange={handleNumChildrenChange}
            className="select select-bordered mt-1"
            required
          >
            {[0, 1, 2, 3].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="divider divider-secondary"></div>
        <div className="flex justify-between items-center text-2xl ">
          <p>Total Cost:</p>
          <p className="text-right">${totalCost}</p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-secondary text-white " type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

BookingsUpdate.propTypes = {
  bookings: PropTypes.object.isRequired, // Assuming you pass bookings as an object
};

export default BookingsUpdate;
