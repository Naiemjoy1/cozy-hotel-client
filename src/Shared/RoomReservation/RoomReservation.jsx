import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../Components/FirebaseProvider/FirebaseProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";

const RoomReservation = ({ roomDetails, bookings }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numRooms, setNumRooms] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const { user } = useContext(AuthContext);
  const [reservationDetails, setReservationDetails] = useState(null);

  console.log(bookings.length);

  const handleNumRoomsChange = (e) => {
    setNumRooms(parseInt(e.target.value));
  };

  const handleNumAdultsChange = (e) => {
    setNumAdults(parseInt(e.target.value));
  };

  const handleNumChildrenChange = (e) => {
    setNumChildren(parseInt(e.target.value));
  };

  const { type, image, roomSize } = roomDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      checkInDate: startDate,
      checkOutDate: endDate,
      numRooms,
      numAdults,
      numChildren,
      totalCost: roomDetails.pricePerNight * numRooms,
      type: roomDetails.type,
      image: roomDetails.image,
      description: roomDetails.description,
      roomImages: roomDetails.roomImages,
      room_id: roomDetails._id,
      email: user?.email,
      user: user?.displayName,
      pricePerNight: roomDetails.pricePerNight,
    };
    setReservationDetails(details);
    setModalIsOpen(true);
  };

  const totalCost = roomDetails.pricePerNight * numRooms;

  const handleConfirm = (e) => {
    e.preventDefault();
    const reservationDetails = {
      checkInDate: startDate,
      checkOutDate: endDate,
      numRooms,
      numAdults,
      numChildren,
      totalCost,
      type: roomDetails.type,
      image: roomDetails.image,
      description: roomDetails.description,
      roomImages: roomDetails.roomImages,
      room_id: roomDetails._id,
      email: user?.email,
      user: user?.displayName,
      pricePerNight: roomDetails.pricePerNight,
    };
    console.log("Reservation Details:", reservationDetails);

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reservationDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("room booked successfully");
          setModalIsOpen(false); // Close the modal
          window.location.reload(); // Reload the page
        }
      });
  };

  // const isRoomBooked = bookings.some(
  //   (booking) => booking.room_id === roomDetails._id
  // );

  const isAuthenticated = !!user;

  const isRoomBooked = bookings.some(
    (booking) => booking.room_id === roomDetails._id
  );

  // Determine button color based on booking status
  const buttonColor = isRoomBooked ? "bg-red-600" : "bg-green-600";

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control mt-6">
          <button
            className={`btn text-white ${buttonColor}`}
            type="submit"
            disabled={isRoomBooked} // Disable button if room is already booked
          >
            {isRoomBooked ? "Room Booked" : "Book Now"}
          </button>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Check-in Date:</span>
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="input input-bordered mt-1 w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Check-out Date:</span>
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="input input-bordered mt-1 w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Rooms:</span>
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
            <span className="label-text text-white">Adults:</span>
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
            <span className="label-text text-white">Children:</span>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            defaultValue={user?.email}
            className="input input-bordered"
            readOnly
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">User Name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            placeholder="user name"
            className="input input-bordered"
            readOnly
          />
        </div>
        <div className="divider divider-secondary"></div>
        <div className=" flex justify-between items-center text-2xl text-white">
          <p>Total Cost:</p>
          <p className=" text-right">${totalCost}</p>
        </div>

        <div className="form-control mt-6">
          {isRoomBooked ? (
            <p className=" bg-red-600 text-center text-white py-2 rounded-lg">
              unavailable
            </p>
          ) : (
            <button className="btn btn-secondary text-white" type="submit">
              Book Now
            </button>
          )}
        </div>
        {isAuthenticated && (
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              content: {
                padding: "60px",
                // background: "#425340",
              },
            }}
          >
            {reservationDetails && (
              <div className="flex">
                <div className="w-1/2 ">
                  <img src={image} alt="" />
                </div>
                <div className="w-1/2  p-10 grid grid-cols-2">
                  <h2>Room Type: {type}</h2>
                  <p>Total Cost: ${reservationDetails.totalCost}</p>
                  <p>
                    Check-in Date:{" "}
                    {reservationDetails.checkInDate.toLocaleDateString()}
                  </p>
                  <p>
                    Check-out Date:{" "}
                    {reservationDetails.checkOutDate.toLocaleDateString()}
                  </p>

                  <p>Number of Rooms: {reservationDetails.numRooms}</p>
                  <p>Number of Adults: {reservationDetails.numAdults}</p>
                  <p>Number of Children: {reservationDetails.numChildren}</p>

                  <p>Email: {reservationDetails.email}</p>
                  <p>User Name: {reservationDetails.user}</p>
                  <p>Room Size: {roomSize}</p>
                </div>
              </div>
            )}
            <div className="flex justify-between mt-10">
              <button
                className="btn bg-red-600 text-white"
                onClick={() => setModalIsOpen(false)}
              >
                Close
              </button>
              <button
                onClick={handleConfirm}
                className=" btn btn-primary text-white"
              >
                Confirm
              </button>
            </div>
          </Modal>
        )}
      </form>
    </div>
  );
};

RoomReservation.propTypes = {
  roomDetails: PropTypes.object.isRequired,
  bookings: PropTypes.array.isRequired,
};
export default RoomReservation;
