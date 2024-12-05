import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/helpers";

interface BlogCardProps {
  title: string;
  slug: string;
  content: string;
  author: string;
  createdAt: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  slug,
  content,
  author,
  createdAt,
  image,
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-lg mx-auto cursor-pointer transition-all transform hover:scale-[1.02] duration-300 ease-in-out hover:shadow-lg">
        <div className="relative mb-4">
          <div className="h-60 w-full mx-auto flex items-center justify-center rounded-md bg-white overflow-hidden">
            <Image
              src={image}
              width={600}
              height={600}
              alt={slug}
              objectFit="cover"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-2">
          {title}
        </h2>
        <span
          className="text-gray-600 text-sm md:text-base mb-4"
          dangerouslySetInnerHTML={{
            __html: content.substring(0, 100) + "...",
          }}
        />
        <div className="text-gray-500 text-sm flex justify-between items-center mt-12">
          <p className="mb-1">{author}</p>
          <p>{formatDate(createdAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
