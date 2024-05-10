const HotelRoomsCard = ({ room }) => {
  const {
    type,
    pricePerNight,
    roomSize,
    availability,
    roomImages,
    specialOffers,
    image,
    description,
    guests,
    beds,
  } = room;

  // Function to truncate the description to 20 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 15) {
      return words.slice(0, 15).join(" ") + "...";
    }
    return description;
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Room" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{type}</h2>
          <p>{truncateDescription(description)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomsCard;
