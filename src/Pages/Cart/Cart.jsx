import PropTypes from "prop-types";
import CartModal from "./cartModal";
import ReviewModal from "./reviewModal";
import { Link } from "react-router-dom";
import UpdateModal from "../../Components/update/UpdateModal";

const Cart = ({ booking, handleDelete, handleCancel }) => {
  const {
    _id,
    checkInDate,
    checkOutDate,
    numRooms,
    numAdults,
    totalCost,
    type,
    image,
    pricePerNight,
  } = booking;

  // Function to format ISO date string into readable date
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); // Formats date in user's local time zone
  };

  return (
    <tr>
      <th>
        <CartModal booking={booking} handleDelete={handleDelete}></CartModal>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={image} alt={type} />
            </div>
          </div>
        </div>
      </td>
      <td className=" space-y-2">
        <p className=" font-marcellus text-2xl">{type}</p>
        <p>
          <span className=" font-roboto font-medium">Date:</span>{" "}
          {formatDate(checkInDate)} - {formatDate(checkOutDate)}
        </p>
        <p>
          <span className="font-roboto font-medium">Details:</span> Rooms:{" "}
          {numRooms}, Adults: {numAdults}
        </p>
      </td>
      <td>${pricePerNight}</td>
      <td>{numRooms}</td>
      <th>${totalCost}</th>
      <th>
        <ReviewModal booking={booking}></ReviewModal>
      </th>
      <th>
        <button
          onClick={() => handleCancel(_id)} // Call handleCancel function with booking ID
          className="btn btn-sm bg-red-600 text-white"
        >
          Cancel
        </button>
      </th>
      <th>
        {/* <UpdateModal booking={booking}></UpdateModal> */}
        <Link to={`/update/${_id}`}>
          <button className="btn btn-sm bg-secondary text-white">update</button>
        </Link>
      </th>
    </tr>
  );
};

Cart.propTypes = {
  booking: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    checkInDate: PropTypes.string.isRequired,
    checkOutDate: PropTypes.string.isRequired,
    numRooms: PropTypes.number.isRequired,
    numAdults: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    pricePerNight: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Cart;
