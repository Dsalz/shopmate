import React from "react";
import heroImg1x from "../../img/hero-1.jpg";
import heroImg2x from "../../img/hero-1@2x.jpg";
import heroImg3x from "../../img/hero-1@3x.jpg";

const Hero = () => {
  return (
    <div>
      <img
        srcSet={`${heroImg3x} 1500w, ${heroImg2x} 1000w, ${heroImg1x} 500w`}
        src={heroImg1x}
        alt="hero"
      />
    </div>
  );
};

export default Hero;
