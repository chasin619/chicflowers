import React from "react";
import Hero from "@/pages/Home/Hero";
import Portfolio from "@/pages/Home/Portfolio";
import EventShowcase from "@/pages/Home/EventShowcase";
import InstagramFeed from "@/pages/Home/InstagramFeed";
import Reviews from "@/pages/Home/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <EventShowcase />
      <Reviews />
      <InstagramFeed />
    </>
  );
};

export default Home;
