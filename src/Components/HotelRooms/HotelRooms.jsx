import { useEffect, useState } from "react";
import HotelRoomsCard from "./HotelRoomsCard";

const HotelRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("room.json")
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
      <div className="container mx-auto my-10 grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <HotelRoomsCard key={room.id} room={room}></HotelRoomsCard>
        ))}
      </div>
    </div>
  );
};

export default HotelRooms;
