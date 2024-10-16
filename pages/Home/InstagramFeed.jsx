"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

// const feedData = [
//   "https://www.instagram.com/p/DAZwlOAvx2C/embed",
//   "https://www.instagram.com/p/C9SgqtkJ7_-/embed",
//   "https://www.instagram.com/p/CzEhweyJAzE/embed",
//   "https://www.instagram.com/p/DBHYbvsSLMn/embed",
//   "https://www.instagram.com/p/DBE5HaUzkVB/embed",
//   "https://www.instagram.com/p/DA7XiwWvB1j/embed",
//   "https://www.instagram.com/p/DA35pmQSmRF/embed",
//   "https://www.instagram.com/p/DA347yQSypI/embed",
// ];

const feedData = ["/feed-1.jpg", "/feed-2.jpg", "/feed-3.jpg", "/feed-4.jpg"];

// const InstagramFeed = () => {
//   const wrapper = useRef();
//   const slider = useRef();

//   useGSAP(
//     () => {
//       gsap.to(slider.current, {
//         x: () => {
//           const sliderWidth = slider.current.getBoundingClientRect().width;
//           return -(sliderWidth - window.innerWidth * 0.9);
//         },
//         ease: "none",
//         scrollTrigger: {
//           trigger: wrapper.current,
//           start: "top top",
//           end: () => `+=${window.innerHeight * feedData.length * 0.4}`,
//           pin: wrapper.current,
//           scrub: true,
//         },
//       });
//     },
//     { revertOnUpdate: true, dependencies: [] }
//   );

//   return (
//     <div ref={wrapper} className="h-screen pt-[72px] overflow-x-clip px-[5vw]">
//       <div ref={slider} className="flex w-max h-full items-center gap-12">
//         {feedData.map((post, i) => (
//           <a
//             href={post.slice(0, post.indexOf("/embed"))}
//             target="_blank"
//             key={i}
//             style={{
//               backgroundColor: `rgb(${i * 15 + 100}, ${i * 15}, ${i * 15})`,
//             }}
//             className="shrink-0 aspect-[400/560] h-[70%] border rounded-lg overflow-hidden cursor-pointer"
//           >
//             <iframe
//               src={post}
//               width="400"
//               height="560"
//               scrolling="no"
//               loading="lazy"
//               className="w-full h-full pointer-events-none"
//             ></iframe>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

const InstagramFeed = () => {
  return (
    <div className="flex flex-col items-center text-center mt-40 mb-10 gap-12">
      <h2 className="uppercase text-[52px] !leading-[1.1em] font-italiana font-semibold">
        FOLLOW ALONG
      </h2>

      <h3 className="uppercase font-italiana text-lg font-semibold">
        @chic.flowers
      </h3>

      <div className="flex h-[550px] gap-3 w-full">
        {feedData.map((post, i) => (
          <div key={i} className="w-full h-full">
            <img src={post} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
