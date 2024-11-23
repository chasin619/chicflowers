import React from "react";
import { BlogCard } from "@/components/blogCard";
import { blogData } from "@/utils/constants";

const CardListSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
      {blogData.map((item, index) => (
        <BlogCard {...item} key={index} />
      ))}
    </div>
  );
};

export default CardListSection;
