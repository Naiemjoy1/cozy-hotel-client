import {
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-20 bg-primary text-white">
        <div className="flex container mx-auto gap-10">
          <div className="w-2/6 pr-10 ">
            <p className="text-3xl font-marcellus">COZYSTAY</p>
            <p className="mt-5 font-jost">
              Founded in 1998, CozyStay Resort is located on the hills of
              Zermatt, immersing you in the wonder of the Swiss Alps against the
              pure sky. Welcome to CozyStay, Zermatt.
            </p>
            <p className="flex gap-4 text-2xl text-white mt-6">
              <FaFacebook /> <FaTwitter /> <SiInstagram />
            </p>
          </div>
          <div className="w-2/6  flex justify-between gap-10">
            <div className="w-1/2 ">
              <p className="text-xl font-marcellus">About Us</p>
              <ul className="mt-5">
                <li className=" font-jost">Our Story</li>
                <li className=" font-jost">Contact Us</li>
                <li className=" font-jost">Premium Services</li>
                <li className=" font-jost">Careers</li>
                <li className=" font-jost">Blog</li>
              </ul>
            </div>
            <div className="w-1/2 ">
              <p className="text-xl font-marcellus">Experiences</p>
              <ul className="mt-5">
                <li className=" font-jost">Our Story</li>
                <li className=" font-jost">Contact Us</li>
                <li className=" font-jost">Premium Services</li>
                <li className=" font-jost">Careers</li>
                <li className=" font-jost">Blog</li>
              </ul>
            </div>
          </div>
          <div className="w-2/6 ">
            <p className="text-xl font-marcellus">Reach Out</p>
            <ul className="mt-5 space-y-2">
              <li className=" font-jost items-center flex gap-2">
                <span>
                  <FaMapMarkerAlt />
                </span>{" "}
                Guidino 25, 6900, Lugano, Switzerland
              </li>
              <li className="flex items-center gap-2 font-jost">
                <span>
                  <MdEmail />
                </span>
                info@cozystay.com
              </li>
              <li className="flex items-center gap-2 font-jost">
                <span>
                  <FaPhoneVolume />
                </span>
                +41 22 345 67 88
              </li>
              <li className="font-jost mt-5">Get Direction</li>
            </ul>
          </div>
        </div>
        {/* <aside>
          
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> */}
      </footer>
    </div>
  );
};

export default Footer;
