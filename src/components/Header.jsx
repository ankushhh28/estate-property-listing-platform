import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div
        className="relative min-h-screen mb-4 bg-center bg-cover w-full overflow-hidden"
        style={{ backgroundImage: "url('/header_img.png')" }}
        id="header"
      >
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white/95  mx-auto py-4 px-6 md:px-20 lg:px-32"
        >
          <h2 className="text-5xl sm:text-6xl md:text-[82px] max-w-3xl  inline-block pt-20 font-bold">
            Unlock homes that match your vision
          </h2>
          <div className="space-x-6 mt-16">
            <a
              href="#Projects"
              className="border border-white px-8 py-4 bg-transparent text-xl font-medium rounded-lg "
            >
              Projects
            </a>

            <a
              href="#Contact"
              className="bg-gradient-to-r from-blue-600 font-medium to-blue-800  text-xl px-8 py-4 rounded-lg "
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
