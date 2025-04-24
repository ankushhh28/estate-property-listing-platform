import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menuButton, setMenuButton] = useState(false);

  // -------------- PREVENT SCROLL ON MOBILE MENU -----------------

  useEffect(() => {
    console.log("use effect called");

    if (menuButton) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuButton]);

  // ---------------------------------------------------------------------

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container max-auto flex justify-between items-center bg-transparent py-4 px-6 md:px-20 lg:px-32">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="Project" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-7"
          onClick={() => setMenuButton(true)}
        />
      </div>

      {/*------------------------------------------- MOBILE-MENU -------------------------- */}
      {menuButton && (
        <div className="md:hidden fixed w-[40%] right-0 top-0 bottom-0 overflow-hidden bg-gray-200  transition-all px-6 py-6">
          <div className="flex justify-end cursor-pointer">
            <img
              src={assets.cross_icon}
              alt=""
              className="w-5"
              onClick={() => setMenuButton(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-4 py-3">
            <a
              onClick={() => setMenuButton(false)}
              href="/"
              className="px-2 font-semibold  rounded-full"
            >
              Home
            </a>
            <a
              onClick={() => setMenuButton(false)}
              href="/"
              className="px-2 font-semibold rounded-full"
            >
              About
            </a>
            <a
              onClick={() => setMenuButton(false)}
              href="/"
              className="px-2 font-semibold  rounded-full"
            >
              Projects
            </a>
            <a
              onClick={() => setMenuButton(false)}
              href="/"
              className="px-2 font-semibold  rounded-full"
            >
              Testimonials
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
