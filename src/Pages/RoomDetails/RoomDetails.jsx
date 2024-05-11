import { BiSolidDrink } from "react-icons/bi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaBed, FaCircle, FaWifi } from "react-icons/fa";
import { FaBottleDroplet } from "react-icons/fa6";
import { GiSlippers, GiTowel, GiWashingMachine } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineCoffeeMaker, MdOutlinePets, MdPool } from "react-icons/md";
import { PiHairDryerFill, PiTelevisionSimple } from "react-icons/pi";
import { RiSafe2Fill } from "react-icons/ri";
import { SlSizeFullscreen } from "react-icons/sl";
import { TbAirConditioning } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import RoomReservation from "../../Shared/RoomReservation/RoomReservation";

const RoomDetails = () => {
  const roomDetails = useLoaderData();
  const {
    _id,
    type,
    pricePerNight,
    roomSize,
    availability,
    roomImages,
    specialOffers,
    image,
    description,
    guests,
    beds,
  } = roomDetails;
  return (
    <div className="">
      <div>
        <img className="w-full h-96" src={image} alt="" />
      </div>
      <div className=" container mx-auto flex justify-between my-10">
        <div className="w-3/5 space-y-10 mr-24">
          <p className=" text-4xl font-marcellus font-light">{type}</p>
          <p className=" text-secondary text-xl">
            Special Offer:{" "}
            <span>{specialOffers ? specialOffers : "No Offers"}</span>
          </p>
          <div className=" flex justify-between">
            <div className=" flex justify-start items-center gap-5 font-roboto">
              <p className="flex items-center gap-4">
                <span className=" text-lg">
                  <SlSizeFullscreen />
                </span>
                {roomSize}
              </p>
              <p className="flex items-center gap-4">
                <span className=" text-xl">
                  <GoPeople />
                </span>
                {guests} Guests
              </p>
              <p className="flex items-center gap-4">
                <span className=" text-xl">
                  <IoBedOutline />
                </span>
                {beds} Beds
              </p>
            </div>
          </div>

          <div className=" space-y-5 font-roboto">
            <p>
              <span className="font-semibold">
                This room shows an example of the “Booking Rules”.
              </span>{" "}
              These information can be reflected in the calendar on the right or
              below the content.
            </p>
            <ul className=" space-y-2">
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                Reservations must be made at least 3 days in advance
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                Reservations can only be made up to 90 days in advance
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                No check-in on Mondays
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                No check-out on Fridays
              </li>
            </ul>
          </div>
          <div>
            <p className=" font-roboto">{description}</p>
          </div>
          <div className=" space-y-5">
            <p className=" font-marcellus font-light text-2xl">
              Family-friendly Amenities
            </p>
            <div className="text-white grid grid-cols-3 gap-4">
              <div className="flex justify-center items-center gap-2 bg-secondary p-4 rounded-lg">
                <p className=" text-2xl ">
                  <MdPool />
                </p>
                <p>Kids Swimming Pool</p>
              </div>
              <div className="flex justify-center items-center gap-2 bg-secondary p-4 rounded-lg">
                <p className=" text-2xl ">
                  <FaBed />
                </p>
                <p>Extra Beds/Baby Crib</p>
              </div>
              <div className="flex justify-center items-center gap-2 bg-secondary p-4 rounded-lg">
                <p className=" text-2xl ">
                  <GiWashingMachine />
                </p>
                <p>Washing Machine</p>
              </div>
            </div>
          </div>
          <div className=" space-y-5">
            <p className=" font-marcellus font-light text-2xl">
              Room Amenities
            </p>
            <div className="grid grid-cols-2 gap-3">
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <TbAirConditioning />
                </span>
                Air conditioner
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <PiTelevisionSimple />
                </span>
                Cable TV
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <FaWifi />
                </span>
                Wifi & Internet
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <GiTowel />
                </span>
                Towels
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <GiSlippers />
                </span>
                Slippers
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <PiHairDryerFill />
                </span>
                Hair Dryer
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <FaBottleDroplet />
                </span>
                Shampoo
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <MdOutlineCoffeeMaker />
                </span>
                Espresso Machine
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <RiSafe2Fill />
                </span>
                Safe Box
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <BiSolidDrink />
                </span>
                Welcome Drinks
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <MdOutlinePets />
                </span>
                Pet Friendly
              </p>
              <p className="flex items-center gap-4">
                <span className="text-2xl text-secondary">
                  <CgSmartHomeRefrigerator />
                </span>
                In-room Refrigerator
              </p>
            </div>
          </div>
          <div className=" space-y-5">
            <p className=" font-marcellus font-light text-2xl">
              What’s included in this suite?
            </p>
            <ul className=" space-y-2">
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                Private balcony
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                140x200 cm Elite bed
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                Upholstered seat beside the panoramic window
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                TV-UHD screen for watching mountaineering films
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                Writing desk with USB ports for documenting your adventures
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                Room safe for your top mountain photos
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                Service station with Lavazza coffee machine, kettle and tea
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                Bathroom with rain shower
              </li>
              <li className="flex items-center gap-4 ">
                <span className="text-sm text-secondary">
                  <FaCircle />
                </span>
                Comfortable terry towels and bathrobes
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/5  font-marcellus">
          <div className=" bg-primary rounded-lg shadow-xl px-10 py-14">
            <div className="flex justify-between items-center">
              <p className=" font-marcellus text-2xl font-light text-white">
                RESERVE:
              </p>
              <p className=" font-jost text-white">
                From <span className=" font-sm text-lg ">${pricePerNight}</span>{" "}
                /night
              </p>
            </div>
            <RoomReservation
              pricePerNight={pricePerNight}
              roomId={_id}
              roomDetails={roomDetails}
            ></RoomReservation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
