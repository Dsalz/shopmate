import React from "react";
import Banners from "../Banners/Banners";
import Hero from "../Hero/Hero";
import SaleBanner from "../SaleBanner/SaleBanner";
import TopBar from "../TopBar/TopBar";
import Jumbotron from "../UI/Jumbotron/Jumbotron";

const Homepage = () => {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <SaleBanner />
        <Banners />
        <Jumbotron />
      </main>
    </>
  );
};

export default Homepage;
