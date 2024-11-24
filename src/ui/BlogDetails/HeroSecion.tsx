import React from "react";
import Image from "next/image";

interface Post {
  title: string;
  author: string;
  date: string;
  image?: string;
}

interface HeroSectionProps {
  post: Post;
}

const HeroSection: React.FC<HeroSectionProps> = ({ post }) => {
  return (
    <div className="flex items-center md:flex-row flex-col-reverse justify-center lg:gap-16 gap-0 lg:px-16 px-4 lg:py-32 py-16 mx-auto">
      <div className="md:w-[45%] w-full lg:mt-20 mt-12 text-left">
        <h1 className="lg:text-5xl text-3xl font-semibold mb-4">{post.title}</h1>
        <p className="text-base font-semibold text-gray-500 mb-4 flex justify-between gap-10 max-w-96">
          {post.author} on <span>{post.date}</span>
        </p>
      </div>

      <div className="md:w-[55%] w-full h-72 lg:h-[520px] mt-12 md:mt-0">
        {post.image && (
          <Image
            src={post.image}
            width={200}
            height={200}
            alt={post.title}
            objectFit="cover"
            className="w-screen object-cover h-72 lg:h-[520px] rounded-3xl shadow-md"
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
