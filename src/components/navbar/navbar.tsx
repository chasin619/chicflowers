import React from "react";
import Link from "next/link";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navRoutes } from "@/utils/constants";

interface NavbarTypes {
  onMenuClose: () => void;
}

const Navbar: React.FC<NavbarTypes> = ({ onMenuClose }) => {
  return (
    <div className="bg-white absolute w-full h-screen top-0 right-0 flex justify-center items-center flex-col pt-9 pb-5">
      <Link
        href="/"
        onClick={onMenuClose}
        className="text-black lg:text-5xl mobile:text-4xl font-italiana font-bold tracking-widest absolute top-7 left-0 w-full text-center"
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
        {navRoutes.map((route, index) => {
          const { name, href } = route;
          return (
            <Link
              key={index}
              href={href}
              onClick={() => {
                setTimeout(() => {
                  onMenuClose();
                }, 800);
              }}
            >
              <li className="lg:text-4xl mobile:text-3xl cursor-pointer hover:italic">
                {name}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="flex text-xl sm:text-2xl gap-5">
        <Link href="https://www.instagram.com/chic.flowers" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-[1em] text-black hover:text-[#18799B] transition-colors duration-200"
          />
        </Link>

        <Link href="https://www.facebook.com/chicflowersFB" target="_blank">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="h-[1em] text-black hover:text-[#18799B] transition-colors duration-200"
          />
        </Link>

        <Link href="https://www.tiktok.com/@alona.chic" target="_blank">
          <FontAwesomeIcon
            icon={faTiktok}
            className="h-[1em] text-black hover:text-[#18799B] transition-colors duration-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
