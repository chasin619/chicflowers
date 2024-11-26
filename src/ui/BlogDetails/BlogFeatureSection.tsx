import Image from "next/image";
import React from "react";

const BlogFeatureSection = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="text-[2.4em] text-center mb-12 leading-none tracking-widest">
          Featured Blogs
        </h1>

        <div className="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 h-72 lg:h-auto relative">
            <Image
              src={"https://picsum.photos/2000/2000?random=2"}
              alt="Featured Blog"
              width={1000}
              height={500}
              objectFit="contain"
              className="w-full h-full object-cover rounded-3xl shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2 p-6 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              How to legally work in the US as an international student
            </h2>
            <p className="text-gray-600 font-medium mb-6">by Interstride</p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              Read Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFeatureSection;
