import React from "react";
import CardListSection from "@/ui/Blog/CardListSection";
import BlogFeatureSection from "@/ui/BlogDetails/BlogFeatureSection";

const Blog = () => {
  return (
    <div className="mt-20 lg:px-16 px-4 py-6">
      <BlogFeatureSection />
      <h1 className="text-[2.4em] text-center mb-12 leading-none tracking-widest mt-20">Latest Blogs</h1>
      <CardListSection />
    </div>
  );
};

export default Blog;
