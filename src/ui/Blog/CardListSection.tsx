"use client";

import React, { useEffect } from "react";
import { BlogCard } from "@/components/blogCard";
import useHomeStore from "@/store/home";

const CardListSection = () => {
  const { getAllBlogs, blogs } = useHomeStore();

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
      {blogs.map((item, index) => (
        <BlogCard {...item} key={index} />
      ))}
    </div>
  );
};

export default CardListSection;
