import React from "react";
import Jumbotron from "../../UI/Jumbotron/Jumbotron";
import Banners from "../Banners/Banners";
import Footer from "../Footer/Footer";
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
        <Jumbotron />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
