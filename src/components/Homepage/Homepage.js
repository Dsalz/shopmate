import React from "react";
import Hero from "../Hero/Hero";
import SaleBanner from "../SaleBanner/SaleBanner";
import TopBar from "../TopBar/TopBar";

const Homepage = () => {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <div className="container">
          <SaleBanner />
        </div>
      </main>
    </>
  );
};

export default Homepage;
