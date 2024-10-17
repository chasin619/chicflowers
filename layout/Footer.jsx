import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex-grow flex flex-col text-center justify-center items-center gap-1.5 px-6">
        <p className="font-medium">Ready to dream something different?</p>

        <div className="text-black flex flex-col items-center gap-2.5 hover:text-[#18799B] transition-colors duration-300 cursor-pointer">
          <h2 className="text-[80px] xs:text-[100px] md:text-[120px] !leading-none font-italiana font-bold pb-[0.25em] border-b border-current tracking-widest">
            CHIC
          </h2>

          <span className="font-semibold">INQUIRE HERE</span>
        </div>
      </div>

      <div className="w-full">
        <div className="border-y border-black flex flex-col-reverse sm:flex-row sm:items-center justify-between px-4 lg:px-6">
          <p className="uppercase text-lg sm:text-xl lg:text-[22px] font-medium !leading-[1.2] mb-[0.5em] sm:mb-0">
            777 5th ave <br />
            San Diego, CA 92101
          </p>

          <h6 className="text-[52px] sm:text-[66px] lg:text-[85px] !leading-[1.1] translate-y-[0.02em] font-italiana font-bold tracking-widest -translate-x-[0.05em] sm:translate-x-0">
            CHIC
          </h6>
        </div>

        <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-6 sm:items-center pt-5 pb-12 gap-y-4">
          <ul className="sm:text-lg font-medium leading-[1.3] sm:leading-[1.5em]">
            <li>619-919-2437</li>
            <li>chicflowersonline@gmail.com</li>
            <li>Event Inquiries</li>
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
