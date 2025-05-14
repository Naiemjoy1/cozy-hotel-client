import React from "react";

const ImageGridCard = ({ image }) => {
  const {
    roomdecor_1,
    roomdecor_2,
    roomdecor_3,
    roomdecor_4,
    lobby,
    event_3,
    walkway,
    washroom_1,
    washroom_2,
    washroom_4,
  } = image;
  return (
    <div>
      <div className="grid gap-4 grid-cols-3 ">
        <div className="border border-red-600 col-span-1">
          <img src={roomdecor_2} alt="img1" />
        </div>
        <div className="border border-red-600 col-span-2">
          <img src={washroom_4} alt="img2" />
        </div>
        <div className="border border-red-600 col-span-2">
          <img src={roomdecor_3} alt="img3" />
        </div>
        <div className="border border-red-600 row-span-2">
          <img src={washroom_2} alt="img4" />
        </div>
        <div className="border border-red-600 col-span-1">
          <img src={roomdecor_1} alt="img5" />
        </div>
        <div className="border border-red-600 col-span-1">
          <img src={roomdecor_4} alt="img6" />
        </div>
      </div>
    </div>
  );
};

export default ImageGridCard;
<h2>hello</h2>;
