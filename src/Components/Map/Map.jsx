import LeafletMap from "../LeafletMap/LeafletMap";

const Map = () => {
  return (
    <div className="container mx-auto my-10 space-y-5">
      <div className="w-3/5 mx-auto text-center space-y-5">
        <p className=" font-marcellus text-5xl text-primary">
          Discover Our Interactive Map
        </p>
        <p className=" font-roboto">
          Explore our interactive map to uncover hidden gems, popular
          attractions, and local landmarks. Navigate through vibrant
          neighborhoods, scenic routes, and must-visit destinations with ease.
          Whether you're planning your next adventure or simply curious about
          the area, our map provides an immersive experience to enhance your
          journey.{" "}
        </p>
      </div>
      <div>
        <LeafletMap></LeafletMap>
      </div>
    </div>
  );
};

export default Map;