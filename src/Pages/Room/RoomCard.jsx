import { useState } from "react";
import { TiPlus } from "react-icons/ti";
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
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const RoomCard = ({ room, alternateLayout }) => {
  const {
    _id,
    type,
    pricePerNight,
    roomSize,
    roomImages,
    description,
    roomFacility,
    availability,
    image,
    specialOffers,
    guests,
    beds,
    roomDetail,
  } = room;

  if (alternateLayout) {
    return (
      <div className="flex justify-between gap-10 h-[450px] items-center ">
        <div className="w-1/3 space-y-14 ">
          <div>
            <p className=" text-sm text-primary font-medium font-jost">
              {roomSize} / {guests} Guests / {beds} Beds
            </p>
          </div>
          <div className=" font-jost space-y-2">
            <p className="text-4xl font-marcellus font-light">{type}</p>
            <p className=" font-jost">{roomDetail}</p>
          </div>
          <div>
            {roomFacility && (
              <ul>
                {roomFacility.map((facility, index) => (
                  <li className="flex items-center gap-2 font-jost" key={index}>
                    <span className="text-sm text-secondary">
                      <TiPlus />
                    </span>
                    {facility}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center gap-6">
            <Link to={`/roomdetails/${_id}`}>
              <button className="btn btn-primary text-white font-marcellus">
                Room Details{" "}
                <span className=" text-xl">
                  <MdKeyboardDoubleArrowRight />
                </span>
              </button>
            </Link>

            <p className=" font-marcellus text-secondary text-xl">
              From ${pricePerNight}/Night
            </p>
          </div>
        </div>
        <div className="w-2/3 ">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            //   autoplay={{ delay: 2000 }}
            loop={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            className="mySwiper"
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {roomImages.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <Link to={`/roomdetails/${_id}`}>
                  <img
                    src={imageUrl}
                    alt={`Room ${index + 1}`}
                    className="w-full h-[450px]"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between gap-10 h-[450px] items-center ">
        <div className="w-2/3 ">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            //   autoplay={{ delay: 2000 }}
            loop={true}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            className="mySwiper"
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {roomImages.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <Link to={`/roomdetails/${_id}`}>
                  <img
                    src={imageUrl}
                    alt={`Room ${index + 1}`}
                    className="w-full h-[450px]"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-1/3 space-y-14 ">
          <div>
            <p className=" text-sm text-primary font-medium font-jost">
              {roomSize} / {guests} Guests / {beds} Beds
            </p>
          </div>
          <div className=" font-jost space-y-2">
            <p className="text-4xl font-marcellus font-light">{type}</p>
            <p className=" font-jost">{roomDetail}</p>
          </div>
          <div>
            {roomFacility && (
              <ul>
                {roomFacility.map((facility, index) => (
                  <li className="flex items-center gap-2 font-jost" key={index}>
                    <span className="text-sm text-secondary">
                      <TiPlus />
                    </span>
                    {facility}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center gap-6">
            <Link to={`/roomdetails/${_id}`}>
              <button className="btn btn-primary text-white font-marcellus">
                Room Details{" "}
                <span className=" text-xl">
                  <MdKeyboardDoubleArrowRight />
                </span>
              </button>
            </Link>

            <p className=" font-marcellus text-secondary text-xl">
              From ${pricePerNight}/Night
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default RoomCard;
