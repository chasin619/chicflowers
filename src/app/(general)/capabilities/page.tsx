import React from "react";
import Page from ".";

export const metadata = {
  title:
    "Capabititis page - Our Services: Event Design, Wedding flowers, Event Planning",
  description:
    "CHIC Flowers offers event design, stunning wedding florals, and expert event planning to create luxurious, unforgettable celebrations tailored to you.",
  openGraph: {
    title:
      "Capabititis page - Our Services: Event Design, Wedding flowers, Event Planning",
    description:
      "CHIC Flowers offers event design, stunning wedding florals, and expert event planning to create luxurious, unforgettable celebrations tailored to you.",
    type: "website",
    url: "https://chicflowers.com/capabilities",
    images: [
      {
        url: "https://chicflowers.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Our Capabilities - Exclusive Wedding Floral Designs",
      },
    ],
    siteName: "CHIC Flowers",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Capabititis page - Our Services: Event Design, Wedding flowers, Event Planning",
    description:
      "CHIC Flowers offers event design, stunning wedding florals, and expert event planning to create luxurious, unforgettable celebrations tailored to you.",
    images: ["https://chicflowers.com/twitter.png"],
    creator: "@alona_chasin",
  },
};

const Capabilities = () => {
  return <Page />;
};

export default Capabilities;
