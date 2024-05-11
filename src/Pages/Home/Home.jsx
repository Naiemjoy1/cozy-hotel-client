import Benefits from "../../Components/Benefits/Benefits";
import HotelRooms from "../../Components/HotelRooms/HotelRooms";
import Map from "../../Components/Map/Map";
import Review from "../../Components/Review/Review";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HotelRooms></HotelRooms>
      <Map></Map>
      <Benefits></Benefits>
      <Review></Review>
    </div>
  );
};

export default Home;
