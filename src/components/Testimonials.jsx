import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className=" container mx-auto py-6 lg:px-32 w-full overflow-hidden "
      id="Testimonials"
    >
      <h1 className="text-center font-bold text-2xl sm:text-4xl mb-2">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="max-w-80 text-gray-500 mb-8 mx-auto text-center">
        Real Stories from Those Who Found Home with Us
      </p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 px-2 py-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="w-full max-w-[19rem]  bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 border border-gray-200 shadow-xl hover:shadow-2xl  duration-300 rounded-2xl px-8 py-10 text-center hover:bg-indigo-50 hover:bg-none hover:scale-105 transition-all"
          >
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4 border-3 border-green-200"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="font-semibold text-gray-800 text-lg md:text-xl">
              {testimonial.name}
            </h2>
            <h3 className="text-sm text-gray-500 mb-2">{testimonial.title}</h3>
            <div className="flex justify-center gap-[2px] mb-4">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt="star"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              ))}
            </div>
            <p className="text-md text-gray-600 leading-relaxed italic">
              “{testimonial.text}”
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
