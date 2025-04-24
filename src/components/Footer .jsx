import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="relative bottom-0 mt-10 h-auto w-full bg-gray-900 px-8 py-8 sm:px-12 md:px-16 lg:px-20">
      {/* ------------------------- Footer Content ------------------ */}

      <div className="flex flex-wrap justify-between gap-6">
        {/* --------------------------- LOGO+CONTENT -------------------- */}
        <div className="flex flex-col gap-2">
          <a href="#header">
            <img
              src={assets.logo_dark}
              alt="logo"
              className="w-28 sm:w-32 md:w-36"
            />
          </a>

          <p className="max-w-md text-blue-50 sm:text-base">
            Find your perfect property effortlessly. Whether buying, renting, or
            investing, we offer verified listings, trusted agents, and smooth
            transactions. Experience a seamless, secure journey to your ideal
            home or investment
          </p>
        </div>

        {/* ----------------------------------------------------------- */}
        <div className="flex flex-col gap-2 sm:gap-6">
          <h1 className="text-lg font-medium uppercase text-blue-400 sm:text-2xl">
            Links
          </h1>
          <div className="space-y-1 text-base font-medium text-blue-50">
            <a
              href="#header"
              className="block cursor-pointer hover:text-blue-300"
            >
              Home
            </a>
            <a
              href="#About"
              className="block cursor-pointer hover:text-blue-300"
            >
              About us
            </a>
            <a
              href="#Projects"
              className="block cursor-pointer hover:text-blue-300"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="block cursor-pointer hover:text-blue-300"
            >
              Contact us
            </a>
          </div>
        </div>
        {/* ---------------------------------------------------------- */}

        {/* ---------------------------------------------------------- */}
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-medium uppercase text-blue-400 sm:text-2xl">
            Contact us
          </h1>
          <div className="space-y-2 text-base font-medium text-blue-50">
            <p className="flex items-center hover:text-blue-300">
              <span className="mr-2">
                <FaFax />
              </span>
              +1 (555) 123-4567
            </p>
            <a
              href="mailto:ankushhh28@gmail.com"
              target="_blank"
              className="flex items-center hover:text-blue-300"
            >
              <span className="mr-2">
                <MdEmail />
              </span>
              ankushhh28@gmail.com
            </a>
          </div>
          {/* ---------------------- SOCIAL-MEDIA ---------------------- */}
          <div className="mt-2 flex flex-col items-start justify-center gap-2">
            <p className="text-lg font-medium uppercase text-blue-400 sm:text-xl ">
              Social media
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-700">
              <a href="https://www.instagram.com/ankush._.28/" target="_blank">
                <InstagramIcon className="cursor-pointer text-2xl text-blue-50 transition duration-300 hover:scale-110 hover:text-[#E4405F] sm:text-3xl" />
              </a>

              <a href="https://wa.me/917869863059" target="_blank">
                <WhatsAppIcon className="cursor-pointer text-2xl text-blue-50 transition duration-300 hover:scale-110 hover:text-[#25D366] sm:text-3xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/ankush-sanodiya-1b40a7261/"
                target="_blank"
              >
                <LinkedInIcon className="cursor-pointer text-2xl text-blue-50 transition duration-300 hover:scale-110 hover:text-[#0077B5] sm:text-3xl" />
              </a>
            </div>
          </div>
          {/* ------------------------------------------------------- */}
        </div>
        {/* --------------------------------------------------------- */}
      </div>

      {/* --------------------- Copyright part --------------------------- */}
      <div className="mt-12 sm:mt-8">
        <hr className="border-t-1 mx-auto my-3 w-4/5 rounded-lg border-blue-50" />
        <h1 className="flex items-center justify-center text-sm tracking-wide text-gray-400">
          <span className="mr-1">
            <CopyrightIcon />
          </span>
          2025 &nbsp; <span className="text-blue-300 underline">Estate</span>
          &nbsp; All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
