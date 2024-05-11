import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../Components/FirebaseProvider/FirebaseProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";

const RoomReservation = ({ roomDetails }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numRooms, setNumRooms] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const { user } = useContext(AuthContext);

  const handleNumRoomsChange = (e) => {
    setNumRooms(parseInt(e.target.value));
  };

  const handleNumAdultsChange = (e) => {
    setNumAdults(parseInt(e.target.value));
  };

  const handleNumChildrenChange = (e) => {
    setNumChildren(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
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
        }
      });
  };

  const totalCost = roomDetails.pricePerNight * numRooms;

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
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
          <button className="btn btn-secondary text-white">Book Now</button>
        </div>
        <div className="my-20">
          <button
            className="btn btn-secondary text-white"
            onClick={() => setModalIsOpen(true)}
          >
            open modal
          </button>
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <h2>title</h2>
            <h2>body</h2>
            <div>
              <button
                onClick={() => setModalIsOpen(false)}
                className="btn btn-error"
              >
                close
              </button>
            </div>
          </Modal>
        </div>
      </form>
    </div>
  );
};

RoomReservation.propTypes = {
  roomDetails: PropTypes.object.isRequired,
};
export default RoomReservation;
