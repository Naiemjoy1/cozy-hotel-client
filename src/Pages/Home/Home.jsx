import Benefits from "../../Components/Benefits/Benefits";
import HotelRooms from "../../Components/HotelRooms/HotelRooms";
import Map from "../../Components/Map/Map";
import Review from "../../Components/Review/Review";
import Banner from "./Banner";
import HomePageModal from "./HomePageModal";
import ServerModal from "./ServerModal";

const Home = () => {
  return (
    <div>
      <HomePageModal></HomePageModal>
      {/* <ServerModal></ServerModal> */}
      <Banner></Banner>
      <HotelRooms></HotelRooms>
      <Map></Map>
      <Benefits></Benefits>
      <Review></Review>
    </div>
  );
};

export default Home;
