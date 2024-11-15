import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "../globals.css";

import Setup from "../Setup";
import Script from "next/script";

export const metadata = {
  title: "CHIC - Wedding Florist",
  description:
    "At CHIC, we believe that every wedding deserves a touch of floral magic. Based in San Diego, we specialize in creating bespoke floral arrangements that capture the beauty and essence of your special day. From elegant bouquets to intricate centerpieces and breathtaking ceremony backdrops, our designs are crafted with passion and precision to reflect your unique love story. Let us transform your vision into a reality with timeless blooms and expert artistry, ensuring that every floral detail is as memorable as the moments you cherish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7NY2W59JZ"
        />

        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${"${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"});
  `}
        </Script>
        <Script id="facebook-pixel">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID});
        fbq('track', 'PageView');
      `}
    </Script>
      </head>
      <body className={`antialiased`}>
        <Setup />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
