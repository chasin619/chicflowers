import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DetailSection = () => {
  return (
    <div className="text-black md:pl-8 md:px-0 mobile:px-8 flex flex-col justify-between h-[80vh] mobile:w-full md:w-1/3">
      <h2 className="text-6xl font-bold">LET'S PLAY</h2>

      <div className="flex mt-8 flex-col">
        <div className="mb-8">
          <p className="text-xl mb-2">619-919-2437</p>
          <p className="text-xl mb-2">chicflowersonline@gmail.com</p>
          <p className="text-xl mb-4">Event Inquiries</p>
          <p className="text-xl border-black border-y py-3">
          777 5th ave <br /> San Diego, CA 92101
          </p>
        </div>
        <div className="space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-6 text-black hover:text-[#18799B] transition-colors duration-200"
            />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="h-6 text-black hover:text-[#18799B] transition-colors duration-200"
            />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTiktok}
              className="h-6 text-black hover:text-[#18799B] transition-colors duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
