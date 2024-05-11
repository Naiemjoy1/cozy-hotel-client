import { useLoaderData } from "react-router-dom";

const Room = () => {
  const rooms = useLoaderData();
  return (
    <div>
      <h2>Room Page:{rooms.length}</h2>
    </div>
  );
};

export default Room;
