import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col p-14 md:px-20 lg:px-32 w-full items-center overflow-hidden container"
      id="About"
    >
      {/* ----------------------------- BRAND HEADING ----------------------------- */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* ------------------------- IMG ------------------------------------- */}
        <img
          src={assets.brand_img}
          alt="brand"
          className="w-full sm:w-1/2 max-w-lg"
        />

        {/* ------------------------- CONTENT-PART ------------------------------------- */}

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-8">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p className="">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p className="">Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            We are committed to delivering excellence with innovative solutions
            tailored to your needs. With a passion for precision and customer
            satisfaction, we turn visions into reality through expertise and
            dedication. Let’s create something remarkable together! 🚀
          </p>
          <button className="bg-blue-500 text-white px-8 py-2 rounded-lg text-lg">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
