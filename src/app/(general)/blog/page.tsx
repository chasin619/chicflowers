import React from "react";
import CardListSection from "@/ui/Blog/CardListSection";

const Blog = () => {
  return (
    <div className="mt-20 lg:px-16 px-7 py-6">
      <h1 className="text-4xl font-semibold text-center mt-12">Latest Blogs</h1>
      <CardListSection />
    </div>
  );
};

export default Blog;
