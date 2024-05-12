import { useContext, useEffect, useState } from "react";
import HotelRoomsCard from "./HotelRoomsCard";
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
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const HotelRooms = () => {
  const [rooms, setRooms] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:3000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <div className=" my-10">
      <div className=" text-center w-2/4 mx-auto space-y-5">
        <p className=" font-roboto font-semibold">WELCOME TO COZYSTAY LODGE</p>
        <p className=" font-marcellus text-5xl text-primary">
          Select Your Cozy Room
        </p>
        <p className=" font-roboto">
          In a new setting composed of exceptional hotels chalets, nestled in a
          forest of pine trees, the CozyStay Lodge is expanding into a
          harmonious and refined unit that affirms it’s purpose: to sublimate
          the stay of its guests by a tailor-made service.
        </p>
      </div>
      <div className="container mx-auto my-10 ">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          autoplay={{ delay: 5000 }}
          loop={true}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="mySwiper"
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room._id}>
              <HotelRoomsCard key={room._id} room={room}></HotelRoomsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HotelRooms;
