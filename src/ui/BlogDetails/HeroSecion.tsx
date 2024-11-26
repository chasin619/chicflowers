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
    <div className="flex items-center flex-col lg:gap-16 gap-8 lg:px-16 px-4 lg:py-32 py-16 mx-auto">
      <div className="w-full text-center">
        <h1 className="lg:text-5xl text-3xl font-semibold mb-4">{post.title}</h1>
        <p className="text-base font-semibold text-gray-500 mb-4">
          {post.author} on <span>{post.date}</span>
        </p>
      </div>

      <div className="w-full h-72 lg:h-[590px] mt-8 md:mt-0">
        {post.image && (
          <Image
            src={post.image}
            width={1000} 
            height={500}
            alt={post.title}
            objectFit="contain"
            className="w-full h-full object-cover rounded-3xl shadow-md"
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
