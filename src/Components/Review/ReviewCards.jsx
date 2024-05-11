import { GoStarFill } from "react-icons/go";

const ReviewCards = ({ review }) => {
  const { _id, comment, rating, name, timestamp, review_id, image, email } =
    review;

  // Convert timestamp to Date object
  const date = new Date(timestamp);

  // Format the date
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div>
      <div className="container flex flex-col w-full py-14 px-6 mx-auto divide-y rounded-md bg-white">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={image}
                alt=""
                className="object-cover w-12 h-12 rounded-full "
              />
            </div>
            <div>
              <h4 className="font-bold">{name}</h4>
              <span className="text-xs ">{formattedDate}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <GoStarFill />
            <span className="text-xl font-bold">{rating}</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm ">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
