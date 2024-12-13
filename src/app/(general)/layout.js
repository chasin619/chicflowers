import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "../globals.css";

import Setup from "../Setup";
import Script from "next/script";

import { Nunito_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Chic Flowers - Luxury Wedding Florist in San Diego and LA",
  description:
    "Chic Flowers One of the best wedding florists San Diego, specializing in luxury weddings and elegant floral designs in Los Angeles and Laguna Beach.",
  openGraph: {
    title: "Chic Flowers - Luxury Wedding Florist in San Diego and LA",
    description:
      "Chic Flowers One of the best wedding florists San Diego, specializing in luxury weddings and elegant floral designs in Los Angeles and Laguna Beach.",
    type: "website",
    url: "https://chicflowers.com/",
    images: [
      {
        url: "https://chicflowers.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Elegant wedding floral arrangements by CHIC Flowers",
      },
    ],
    siteName: "CHIC Flowers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chic Flowers - Luxury Wedding Florist in San Diego and LA",
    description:
      "Chic Flowers One of the best wedding florists San Diego, specializing in luxury weddings and elegant floral designs in Los Angeles and Laguna Beach.",
    images: ["https://chicflowers.com/twitter.png"],
    creator: "@alona_chasin",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CHIC Flowers",
    description:
      "CHIC Flowers specializes in bespoke wedding floral designs, including elegant bouquets, high-end centerpieces, and exclusive backdrops, making your special day unforgettable in San Diego and Los Angeles.",
    url: "https://yourwebsite.com/",
    logo: "https://yourwebsite.com/images/logo.png",
    image: "https://yourwebsite.com/images/home-og.jpg",
    telephone: "+1-234-567-890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Floral Ave",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92101",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/chicflowers",
      "https://www.instagram.com/chicflowers",
      "https://www.linkedin.com/company/chicflowers",
      "https://twitter.com/chicflowers_sd",
    ],
  },
};

const nunitoSans = Nunito_Sans({
  weight: ["200", "400", "600", "800", "1000"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Chic Wedding Designer",
  description:
    "Chic in San Diego specializes in bespoke wedding floral designs, including bouquets, centerpieces, and backdrops, crafted to make your special day unforgettable.",
  url: "https://chicflowers.com",
  logo: "https://chicflowers.com/favicon.ico",
  telephone: "+619-919-2437",
  address: {
    "@type": "PostalAddress",
    streetAddress: "777 5th ave",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92101",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.715736",
    longitude: "-117.161087",
  },
  areaServed: [
    { "@type": "Place", name: "San Diego" },
    { "@type": "Place", name: "Los Angeles" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/chic.flowers",
    "https://www.facebook.com/chicflowersFB",
    "https://www.tiktok.com/@alona.chic",
    "https://www.pinterest.com/chicflowers_",
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://chicflowers.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  const canonicalUrl =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7NY2W59JZ"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `,
          }}
        />
        <Script
          id="facebook-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`antialiased ${nunitoSans.className}`}>
        <Setup />
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
