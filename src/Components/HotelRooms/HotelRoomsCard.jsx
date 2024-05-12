import { GoPeople } from "react-icons/go";
import { IoBedOutline } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const HotelRoomsCard = ({ room }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    type,
    pricePerNight,
    roomSize,
    image,
    description,
    guests,
    beds,
  } = room;

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 15) {
      return words.slice(0, 15).join(" ") + "...";
    }
    return description;
  };

  return (
    <div>
      <div className="card card-compact bg-primary text-white shadow-xl">
        <figure className=" relative">
          <img src={image} alt="Room" />
          <div className="absolute left-6 top-6 bg-primary p-2">
            <p className=" text-sm">${pricePerNight} / NIGHT</p>
          </div>
        </figure>
        <div className="card-body space-y-4">
          <h2 className="card-title font-marcellus text-2xl font-light">
            {type}
          </h2>
          <div className=" flex font-roboto">
            <p className="flex items-center gap-4">
              <span className=" text-lg">
                <SlSizeFullscreen />
              </span>
              {roomSize}
            </p>
            <p className="flex items-center gap-4">
              <span className=" text-xl">
                <GoPeople />
              </span>
              {guests} Guests
            </p>
            <p className="flex items-center gap-4">
              <span className=" text-xl">
                <IoBedOutline />
              </span>
              {beds} Beds
            </p>
          </div>
          <p>{truncateDescription(description)}</p>
          <Link to={`/roomdetails/${_id}`}>
            <button className="btn btn-secondary  text-white">
              Book Now
              <span className=" text-xl">
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

HotelRoomsCard.propTypes = {
  room: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    pricePerNight: PropTypes.number.isRequired,
    roomSize: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    guests: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
  }).isRequired,
};

export default HotelRoomsCard;
