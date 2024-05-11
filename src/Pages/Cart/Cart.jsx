import PropTypes from "prop-types";

const Cart = ({ booking, handleDelete }) => {
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

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline hover:bg-red-600 hover:border-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
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
          <span className=" font-roboto font-medium">Date:</span> {checkInDate}{" "}
          - {checkOutDate}
        </p>
        <p>
          <span className="font-roboto font-medium">Details:</span> Rooms:{" "}
          {numRooms}, Adults: {numAdults}
        </p>
      </td>
      <td>${pricePerNight}</td>
      <td>{numRooms}</td>
      <th>${totalCost}</th>
      <th>Confirm</th>
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
