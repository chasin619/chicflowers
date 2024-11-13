import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "../globals.css";

import Setup from "../Setup";

export const metadata = {
  title: "CHIC - Wedding Florist",
  description:
    "At CHIC, we believe that every wedding deserves a touch of floral magic. Based in San Diego, we specialize in creating bespoke floral arrangements that capture the beauty and essence of your special day. From elegant bouquets to intricate centerpieces and breathtaking ceremony backdrops, our designs are crafted with passion and precision to reflect your unique love story. Let us transform your vision into a reality with timeless blooms and expert artistry, ensuring that every floral detail is as memorable as the moments you cherish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Setup />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
