import Benefits from "../../Components/Benefits/Benefits";

const AboutUs = () => {
  return (
    <div>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Kzmm40K/pexels-quang-nguyen-vinh-222549-14036250.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white font-marcellus">
              About The Hotel
            </h1>
            <p className="mb-5 text-white font-jost">
              A luxury boutique hotel in the heart of wine country
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-center lg:w-1/2 mx-auto space-y-5 my-14">
          <p>WELCOME TO COZYSTAY LODGE</p>
          <p className=" font-marcellus text-4xl ">
            Exceptional Chalets, tailored services and the experience of unique
            holidays
          </p>
          <p>
            The CozyStay Lodge consists of exceptional hotels chalets forming a
            harmonious and refined environment. Each room is unique, with
            colourful décor, Victorian furniture and claw-foot bathtubs. We
            welcome guests with authentic wine country hospitality. Stay, sip,
            and savor the best of Napa wine country at CozyStay.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:h-[550px] items-center justify-center gap-5 mb-14">
          <img
            className="lg:h-[550px]"
            src="https://i.ibb.co/SQd718m/pexels-mchodakowski-693895.jpg"
            alt=""
          />
          <img
            className="lg:h-[550px]"
            src="https://i.ibb.co/6bwX62q/pexels-eduardo-romero-817034-3124079.jpg"
            alt=""
          />
          <img
            className="lg:h-[550px]"
            src="https://i.ibb.co/Zf4Pxg9/pexels-talksintheam-2263510.jpg"
            alt=""
          />
        </div>
        <Benefits></Benefits>
      </div>
    </div>
  );
};

export default AboutUs;
