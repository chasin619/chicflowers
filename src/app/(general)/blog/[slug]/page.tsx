import { blogData } from "@/utils/constants";

import HeroSection from "@/ui/BlogDetails/HeroSecion";
import ContentSection from "@/ui/BlogDetails/ContentSection";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = blogData.find((post) => post.slug === slug);

  return (
    <div>
      <HeroSection post={post} />
      <ContentSection htmlContent={post.content} />
    </div>
  );
};

export default BlogDetails;
