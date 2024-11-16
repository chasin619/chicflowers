import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "../globals.css";

import Setup from "../Setup";
import Script from "next/script";

import { Nunito_Sans } from "next/font/google";

export const metadata = {
  title: "CHIC Flowers - Wedding Florist",
  description:
    "Chic in San Diego specializes in bespoke wedding floral designs, including bouquets, centerpieces, and backdrops, crafted to make your special day unforgettable",
  openGraph: {
    title: "Chic Wedding Florals | San Diego's Best Florist",
    description:
      "Elegant bouquets, centerpieces, and floral backdrops crafted for your perfect wedding day in San Diego.",
    // url: "https://chicflowers.com",
    type: "website",
    // images: [
    //   {
    //     url: "https://chicflowers.com/favicon.ico",
    //     width: 1200,
    //     height: 630,
    //     alt: "Chic Wedding Florals - Bespoke Wedding Floral Designs",
    //   },
    // ],
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
  console.log(canonicalUrl);

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
        <meta property="og:url" content="https://chicflowers.com" />
        <meta
          property="og:image"
          content="https://chicflowers.com/favicon.ico"
        />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta httpEquiv="expires" content="-1" />
        <meta httpEquiv="cache-control" content="no-cache" />
      </head>
      <body className={`antialiased ${nunitoSans.className}`}>
        <Setup />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
