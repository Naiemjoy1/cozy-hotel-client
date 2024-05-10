import Slider from "../../Components/Slider/Slider";

const Banner = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/qBgDtVR/pexels-pixabay-261388.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" flex justify-center items-center text-white container mx-auto gap-10 py-28">
          <div className="w-1/2 space-y-5">
            <p className=" font-roboto font-semibold">BEST PLACE FOR RELAX</p>
            <p className=" font-marcellus font-normal text-5xl">
              Perfect Countryside Vacation at CozyStay Lodge
            </p>
            <p className=" font-roboto">
              Nestled in Napa Valley, CozyStay Lodge is a luxury boutique hotel
              in the heart of wine country, conveniently located in the historic
              Napa Mill neighbourhood, just steps from some of the best wineries
              and restaurants.
            </p>
          </div>
          <div className="w-1/2">
            <Slider></Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
