import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className=" container mx-auto py-10 lg:px-32 w-full overflow-hidden ">
      <h1 className="text-center font-bold text-2xl sm:text-4xl mb-2">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="max-w-80 text-gray-500 mb-8 mx-auto text-center">
        Real Stories from Those Who Found Home with Us
      </p>
     
    </div>
  );
};

export default Testimonials;
