import { useEffect, useState } from "react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewCards from "./ReviewCards";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  useEffect(() => {
    fetchReviews(selectedRating);
  }, [selectedRating]);

  const fetchReviews = (rating) => {
    let url = "https://hotel-booking-server-lake.vercel.app/reviews";
    if (rating !== null) {
      url += `?minRating=${rating}&maxRating=${rating}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  };

  const handleRatingChange = (e) => {
    const rating = parseInt(e.target.value);
    setSelectedRating(rating);
  };

  return (
    <div className="space-y-10 my-10">
      <div className=" py-20">
        <div className="container mx-auto space-y-10">
          <div className=" text-center w-3/5 mx-auto space-y-5">
            <h3 data-aos="fade-down" className="lg:text-4xl font-marcellus">
              Feedback from our Guests
            </h3>
            <p data-aos="fade-right">
              Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
              fugit ea delectus, sed voluptatem. Laborum accusantium libero
              commodi id officiis itaque esse adipisci, necessitatibus
              asperiores, illo odio.
            </p>
            <div data-aos="fade-up" className="flex justify-center mt-5">
              <label className="mr-3">Select Rating:</label>
              <select
                className=" bg-secondary px-5 py-1 rounded-lg"
                onChange={handleRatingChange}
                value={selectedRating !== null ? selectedRating : ""}
              >
                <option value="">All</option> {/* Option to show all reviews */}
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div data-aos="fade-up">
            <Swiper
              spaceBetween={40}
              slidesPerView={1}
              navigation={true}
              autoplay={{ delay: 4000 }}
              loop={true}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              className="mySwiper"
              breakpoints={{
                // When window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // When window width is < 768px
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review._id}>
                  <ReviewCards key={review._id} review={review}></ReviewCards>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
