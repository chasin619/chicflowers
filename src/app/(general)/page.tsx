import React from "react";
import Hero from "@/ui/Home/Hero";
import Portfolio from "@/ui/Home/Portfolio";
import EventShowcase from "@/ui/Home/EventShowcase";
import InstagramFeed from "@/ui/Home/InstagramFeed";
import Reviews from "@/ui/Home/Reviews";

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
