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

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        navigation={true}
        autoplay={{ delay: 2000 }}
        loop={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-96">
            <img
              className="rounded-xl h-full w-full"
              src="https://i.ibb.co/SQd718m/pexels-mchodakowski-693895.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-96">
            <img
              className="rounded-xl h-full w-full"
              src="https://i.ibb.co/6bwX62q/pexels-eduardo-romero-817034-3124079.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-96">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/R0GVjJt/pexels-valeriya-1860197.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-32 md:h-56 lg:h-96">
            <img
              className=" rounded-xl h-full w-full"
              src="https://i.ibb.co/Zf4Pxg9/pexels-talksintheam-2263510.jpg"
              alt=""
              // style={{ width: "100%", height: "533px" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
