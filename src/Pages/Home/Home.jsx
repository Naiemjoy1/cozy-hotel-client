import Benefits from "../../Components/Benefits/Benefits";
import HotelRooms from "../../Components/HotelRooms/HotelRooms";
import Map from "../../Components/Map/Map";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Review from "../../Components/Review/Review";
import Banner from "./Banner";
import HomePageModal from "./HomePageModal";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <HomePageModal></HomePageModal>
      <Banner></Banner>
      <HotelRooms></HotelRooms>
      <Map></Map>
      <Benefits></Benefits>
      <Review></Review>
    </div>
  );
};

export default Home;
