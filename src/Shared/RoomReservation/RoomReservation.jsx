import { useState } from "react";

const RoomReservation = ({ pricePerNight }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numRooms, setNumRooms] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationDetails = {
      checkInDate,
      checkOutDate,
      numRooms,
      numAdults,
      numChildren,
      totalCost,
    };
    console.log("Reservation Details:", reservationDetails);
  };

  const totalCost = pricePerNight * numRooms;

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Check-in Date:</span>
          </label>
          <input
            type="date"
            value={checkInDate}
            onChange={handleCheckInDateChange}
            className="input input-bordered mt-1"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Check-out Date:</span>
          </label>
          <input
            type="date"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
            className="input input-bordered mt-1"
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
        <div className="divider divider-secondary"></div>
        <div className=" flex justify-between items-center text-2xl text-white">
          <p>Total Cost:</p>
          <p className=" text-right">{totalCost}</p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-secondary text-white">Reserve Now</button>
        </div>
      </form>
    </div>
  );
};

export default RoomReservation;
