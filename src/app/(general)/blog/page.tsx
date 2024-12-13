import React from "react";
import CardListSection from "@/ui/Blog/CardListSection";
import BlogFeatureSection from "@/ui/BlogDetails/BlogFeatureSection";

export const metadata = {
  title: "CHIC Flowers Blog: Inspiration for Luxury Weddings & Events",
  description:
    "Explore the CHIC Flowers blog for expert tips, stunning ideas, and inspiration on luxury wedding florals, event design, and planning in San Diego and LA.",
  openGraph: {
    title: "CHIC Flowers Blog: Inspiration for Luxury Weddings & Events",
    description:
      "Explore the CHIC Flowers blog for expert tips, stunning ideas, and inspiration on luxury wedding florals, event design, and planning in San Diego and LA.",
    type: "website",
    url: "https://chicflowers.com/blog",
    images: [
      {
        url: "https://chicflowers.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Blog CHIC Flowers - Luxury Wedding Florist",
      },
    ],
    siteName: "CHIC Flowers",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHIC Flowers Blog: Inspiration for Luxury Weddings & Events",
    description:
      "Explore the CHIC Flowers blog for expert tips, stunning ideas, and inspiration on luxury wedding florals, event design, and planning in San Diego and LA.",
    images: ["https://chicflowers.com/twitter.png"],
    creator: "@alona_chasin",
  },
};

const Blog = () => {
  return (
    <div className="mt-20 lg:px-16 px-4 py-6">
      <BlogFeatureSection />
      <h1 className="text-[2.4em] text-center mb-12 leading-none tracking-widest mt-20">
        Latest Blogs
      </h1>
      <CardListSection />
    </div>
  );
};

export default Blog;
