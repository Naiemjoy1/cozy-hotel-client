import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { GoStarFill } from "react-icons/go";

const ReviewCards = ({ review }) => {
  const { comment, rating, name, timestamp, image } = review;

  const date = new Date(timestamp);

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="container flex flex-col w-full py-14 px-6 mx-auto divide-y rounded-md bg-secondary h-[300px] transition-transform duration-300 hover:scale-105">
        <div className="flex justify-between p-4">
          <div data-aos="fade-up" className="flex space-x-4">
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
          <div data-aos="fade-up" className="flex items-center space-x-2">
            <GoStarFill />
            <span className="text-xl font-bold">{rating}</span>
          </div>
        </div>
        <div data-aos="fade-up" className="p-4 space-y-2 text-sm ">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCards.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCards;
