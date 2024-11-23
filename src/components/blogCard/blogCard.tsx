import Image from "next/image";
import React from "react";

const BlogCard = ({ title, description, author, date, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="relative mb-4">
        <div className="h-60 w-full mx-auto flex items-center justify-center rounded-full bg-white">
          <Image
            src={image}
            width={600}
            height={600}
            alt="Illustration"
            objectFit="cover"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-gray-500 text-sm flex justify-between items-center mt-12">
        <p className="mb-1">{author}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
