"use client";
import { useEffect } from "react";

import HeroSection from "@/ui/BlogDetails/HeroSecion";
import ContentSection from "@/ui/BlogDetails/ContentSection";
import useHomeStore from "@/store/home";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const { blogs, getAllBlogs } = useHomeStore();
  const slug = params.slug;
  const post = blogs.find((post) => post.slug === slug);

  useEffect(() => {
    if (!post) {
      getAllBlogs();
    }
  }, []);

  if (!post) {
    return <></>;
  }

  return (
    <div>
      <HeroSection post={post} />
      <ContentSection htmlContent={post.content} />
    </div>
  );
};

export default BlogDetails;
