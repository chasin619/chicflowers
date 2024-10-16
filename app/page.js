import React from "react";
import Hero from "@/pages/Home/Hero";
import Portfolio from "@/pages/Home/Portfolio";
import EventShowcase from "@/pages/Home/EventShowcase";
import InstagramFeed from "@/pages/Home/InstagramFeed";

const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <EventShowcase />
      <InstagramFeed />
    </>
  );
};

export default Home;
