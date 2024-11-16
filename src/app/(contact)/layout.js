import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "../globals.css";

import Setup from "../Setup";
import Script from "next/script";

import { Nunito_Sans } from "next/font/google";

export const metadata = {
  title: "Chic Wedding Designer - Contact | San Diego Wedding Florist | Los Angelas Wedding Florist",
  description:
    "Chic in San Diego specializes in bespoke wedding floral designs, including bouquets, centerpieces, and backdrops, crafted to make your special day unforgettable.",
  graphData: {
    title: "Contact Chic Wedding Florals",
    description:
      "Reach out to us for personalized floral arrangements to make your wedding unforgettable.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    image: "https://yourwebsite.com/assets/images/contact-banner.jpg",
    type: "article",
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
      </body>
    </html>
  );
}
