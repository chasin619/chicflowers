import Header from "@/layout/Header";
import "../globals.css";

import Setup from "../Setup";
import Script from "next/script";

import { Nunito_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Contact CHIC Flowers: Let's Create Your Dream Event",
  description:
    "Get in touch with CHIC Flowers for luxury wedding and event design services. We’re here to help you bring your vision to life in San Diego and LA.",
  openGraph: {
    title: "Contact CHIC Flowers: Let's Create Your Dream Event",
    description:
      "Get in touch with CHIC Flowers for luxury wedding and event design services. We’re here to help you bring your vision to life in San Diego and LA.",
    type: "website",
    url: "https://chicflowers.com/contact",
    images: [
      {
        url: "https://chicflowers.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Contact CHIC Flowers - Luxury Wedding Florist",
      },
    ],
    siteName: "CHIC Flowers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CHIC Flowers: Let's Create Your Dream Event",
    description:
      "Get in touch with CHIC Flowers for luxury wedding and event design services. We’re here to help you bring your vision to life in San Diego and LA.",
    images: ["https://chicflowers.com/twitter.png"],
    creator: "@alona_chasin",
  },
  metadataBase: new URL("https://chicflowers.com/"),
  alternates: {
    canonical: "./",
  },
};

const nunitoSans = Nunito_Sans({
  weight: ["200", "400", "600", "800", "1000"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

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
        <meta httpEquiv="pragma" content="no-cache" />
        <meta httpEquiv="expires" content="-1" />
        <meta httpEquiv="cache-control" content="no-cache" />
      </head>
      <body className={`antialiased ${nunitoSans.className}`}>
        <Setup />
        <Header />
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
