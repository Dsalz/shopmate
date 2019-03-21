import React from "react";
import Banners from "../Banners/Banners";
import Hero from "../Hero/Hero";
import SaleBanner from "../SaleBanner/SaleBanner";
import TopBar from "../TopBar/TopBar";

const Homepage = () => {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <SaleBanner />
        <Banners />
      </main>
    </>
  );
};

export default Homepage;
