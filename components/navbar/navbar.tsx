import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface NavbarTypes {
  onMenuClose: () => void;
}

const Navbar: React.FC<NavbarTypes> = ({ onMenuClose }) => {
  return (
    <div className="bg-white absolute w-full h-screen top-0 right-0 flex justify-center items-center flex-col py-7">
      <Link
        href="/"
        className="text-black text-5xl font-italiana font-bold tracking-widest absolute top-7 left-0 w-full text-center"
      >
        CHIC
      </Link>
      <div className="cursor-pointer self-start ml-7" onClick={onMenuClose}>
        <div className="relative w-6 h-6">
          <span className="absolute block w-full h-[2px] bg-black rotate-45 top-1/2 left-0 transform -translate-y-1/2"></span>
          <span className="absolute block w-full h-[2px] bg-black -rotate-45 top-1/2 left-0 transform -translate-y-1/2"></span>
        </div>
      </div>

      <ul className="flex flex-col items-center justify-center gap-6 flex-1">
        <li className="text-4xl cursor-pointer hover:italic">About</li>
        <li className="text-4xl cursor-pointer hover:italic">Capabilities</li>
        <li className="text-4xl cursor-pointer hover:italic">Contact Us</li>
      </ul>
      <div className="flex text-xl sm:text-2xl gap-5">
        <a href="#" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-[1em] text-black hover:text-[#18799B] transition-colors duration-200"
          />
        </a>

        <a href="#" target="_blank">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="h-[1em] text-black hover:text-[#18799B] transition-colors duration-200"
          />
        </a>

        <a onClick={() => setShowMenu(false)}>
          <FontAwesomeIcon
            icon={faTiktok}
            className="h-[1em] text-black hover:text-[#18799B] transition-colors duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;