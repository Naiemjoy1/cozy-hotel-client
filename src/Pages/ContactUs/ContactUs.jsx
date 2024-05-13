import LeafletMap from "../../Components/LeafletMap/LeafletMap";

const ContactUs = () => {
  return (
    <div>
      <div>
        <LeafletMap></LeafletMap>
      </div>
      <div className="bg-gray-200">
        <div className="flex p-14 justify-center items-center container mx-auto bg-white gap-14">
          <div className="w-1/2">
            <img
              src="https://i.ibb.co/yfnsfFy/pexels-nguyendesigner-244133.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <p className="text-4xl font-marcellus">Contact Information</p>
            <div className="divider divider-secondary"></div>
            <p className=" font-jost">
              Address: Guidino 25, 6900, Lugano, Switzerland
            </p>
            <div className="divider divider-secondary"></div>
            <p className=" font-jost">Phone Number: +41 22 345 67 88</p>
            <div className="divider divider-secondary"></div>
            <p className=" font-jost">Email: info@cozystay.com</p>
            <div className="divider divider-secondary"></div>
            <p className="mt-10 text-4xl font-marcellus mb-10">
              Contact Information
            </p>

            {/* xs */}
            <textarea
              placeholder="Email"
              className="textarea textarea-bordered textarea-xs w-full"
            ></textarea>
            {/* sm */}
            <textarea
              placeholder="Your email"
              className="textarea textarea-bordered textarea-sm w-full "
            ></textarea>
            {/* md */}
            <textarea
              placeholder="Subject"
              className="textarea textarea-bordered textarea-md w-full "
            ></textarea>
            {/* lg */}
            <textarea
              placeholder="Your message"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
            <button className="text-white btn btn-secondary w-full mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
