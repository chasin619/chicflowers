"use client";

import HeroSection from "@/ui/BlogDetails/HeroSecion";
import ContentSection from "@/ui/BlogDetails/ContentSection";
import useHomeStore from "@/store/home";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const { blogs } = useHomeStore();
  const slug = params.slug;
  const post = blogs.find((post) => post.slug === slug);

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div>
      <HeroSection post={post} />
      <ContentSection htmlContent={post.content} />
    </div>
  );
};

export default BlogDetails;
