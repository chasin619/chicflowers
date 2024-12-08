"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useHomeStore from "@/store/home";

const BlogFeatureSection = () => {
  const { blogs } = useHomeStore();

  if (!blogs || blogs.length === 0) {
    return <></>;
  }

  const idx = Math.floor(Math.random() * blogs.length);
  const randomBlog = blogs[idx];
  const { image, title, slug, author } = randomBlog;

  return (
    <div className="">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h1 className="text-[2.4em] text-center mb-12 leading-none tracking-widest">
          Featured Blogs
        </h1>

        <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full lg:w-[90vh] h-[65vh] relative">
            <Image
              src={image}
              alt={title}
              width={1000}
              height={500}
              objectFit="contain"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2 p-6 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600 font-medium mb-6">{author}</p>
            <Link href={`/blog/${slug}`}>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                Read Article
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFeatureSection;
