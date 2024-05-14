import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import ReviewCards from "../../Components/Review/ReviewCards";
import { useEffect, useState } from "react";

const ReviewSlider = ({ roomDetails }) => {
  const { _id } = roomDetails;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3000/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        // Filter reviews based on matching _id with room_id
        const filteredReviews = data.filter((review) => review.room_id === _id);
        setReviews(filteredReviews);
        console.log("Filtered reviews data:", filteredReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
      }
    };

    fetchReviews();

    return () => {};
  }, [roomDetails]);

  console.log("show reviews by id ", reviews);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
      autoplay={{ delay: 4000 }}
      loop={true}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      className="mySwiper"
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <ReviewCards key={review._id} review={review}></ReviewCards>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
