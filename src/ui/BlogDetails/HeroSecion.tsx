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
    <div className="flex items-center justify-center gap-16 lg:px-16 px-7 py-32 mx-auto">
      <div className="w-[45%] mt-20 text-center md:text-left">
        <h1 className="text-5xl font-semibold mb-4">{post.title}</h1>
        <p className="text-base font-semibold text-gray-500 mb-4 flex justify-between gap-10 max-w-96">
          {post.author} on <span>{post.date}</span>
        </p>
      </div>

      <div className="w-[55%] h-[520px] mt-12 md:mt-0">
        {post.image && (
          <Image
            src={post.image}
            width={200}
            height={200}
            alt={post.title}
            objectFit="cover"
            className="w-screen object-cover h-[520px] rounded-3xl shadow-md"
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
