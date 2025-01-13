import axios from "axios";
import HeroSection from "@/ui/BlogDetails/HeroSecion";
import ContentSection from "@/ui/BlogDetails/ContentSection";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";
import Head from "next/head";

async function getBlogBySlug(slug: string) {
  try {
    const response = await axios.get(`${BASE_URL}/api/blog/slug/?slug=${slug}`);
    return response.data.blog;
  } catch (error) {
    console.error("Error fetching blog data:", error.response.data);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogBySlug(params.slug);
  return {
    title: post?.title,
    description: post?.meta_description,
    openGraph: {
      title: post?.title,
      description: post?.meta_description,
      type: "article",
      url: `https://chicflowers.com/blog/${params.slug}`,
      images: [
        {
          url: post?.image,
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
      siteName: "CHIC Flowers",
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.meta_description,
      images: [post?.image || "https://chicflowers.com/twitter.png"],
      creator: "@alona_chasin",
    },
    metadataBase: new URL("https://chicflowers.com/"),
    alternates: {
      canonical: `https://chicflowers.com/blog/${params.slug}`,
    },
  };
}

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.meta_description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://chicflowers.com/blog/${post.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.meta_description} />
        <meta name="twitter:image" content={post.image} />
      </Head>
      <HeroSection post={post} />
      <ContentSection htmlContent={post.content} />
    </div>
  );
};

export default BlogDetailsPage;
