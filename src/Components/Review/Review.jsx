import { useEffect, useState } from "react";
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
import ReviewCards from "./ReviewCards";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews when component mounts
    fetch("http://localhost:3000/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  return (
    <div className="space-y-10 my-10">
      <div className="bg-primary py-20">
        <div className="container mx-auto space-y-10">
          <div className=" text-center w-3/5 mx-auto space-y-5 text-white">
            <h3 className="text-4xl font-marcellus">
              Feedback from our Guests
            </h3>
            <p>
              Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
              fugit ea delectus, sed voluptatem. Laborum accusantium libero
              commodi id officiis itaque esse adipisci, necessitatibus
              asperiores, illo odio.
            </p>
          </div>
          <div>
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              navigation={true}
              autoplay={{ delay: 6000 }}
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
          </div>
        </div>
      </div>
      <div className="text-center space-y-5">
        <p className="font-marcellus text-5xl text-primary">
          Sign up for our newsletter
        </p>
        <div className="flex justify-center">
          <form>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered join-item"
                  // value={email}
                  // onChange={handleEmailChange}
                />
                <button type="submit" className="btn btn-primary join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
