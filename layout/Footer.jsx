import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex-grow flex flex-col justify-center items-center gap-1.5 px-6">
        <p className="font-medium">Ready to dream something different?</p>

        <div className="text-black flex flex-col items-center gap-2.5 hover:text-[#18799B] transition-colors duration-300 cursor-pointer">
          <h2 className="text-[120px] !leading-none font-italiana font-bold pb-[0.25em] border-b border-current tracking-widest">
            CHIC
          </h2>

          <span className="font-semibold">INQUIRE HERE</span>
        </div>
      </div>

      <div className="w-full">
        <div className="border-y border-black flex items-center justify-between px-6">
          <p className="uppercase text-[22px] font-medium !leading-[1.2]">
            336 W 37th St Suite 1200 <br />
            New York, NY 10018
          </p>

          <h6 className="text-[85px] !leading-[1.1] translate-y-[0.02em] font-italiana font-bold tracking-widest">
            CHIC
          </h6>
        </div>

        <div className="flex justify-between px-6 items-center pt-5 pb-12">
          <ul className="text-lg font-medium">
            <li>619-919-2437</li>
            <li>chicflowersonline@gmail.com</li>
            <li>Event Inquiries</li>
          </ul>

          <div className="flex text-2xl gap-5">
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

            <a href="#" target="_blank">
              <FontAwesomeIcon
                icon={faTiktok}
                className="h-[1em] text-black hover:text-[#18799B] transition-colors duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
