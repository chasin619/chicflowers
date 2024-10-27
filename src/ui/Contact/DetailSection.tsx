import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DetailSection = () => {
  return (
    <div className="text-black pl-8 flex flex-col justify-between h-[80vh] w-1/3">
      <h2 className="text-6xl font-bold">LET'S PLAY</h2>

      <div className="flex mt-8 flex-col">
        <div className="mb-8">
          <p className="text-xl mb-2">718.853.8538</p>
          <p className="text-xl mb-4">info@birchevents.com</p>
          <p className="text-xl border-black border-y py-3">
            336 W 37TH ST SUITE 1200 <br /> NEW YORK, NY 10018
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
