import React from "react";
import SquareBanner from "../UI/SquareBanner/SquareBanner";

function Banners() {
  return (
    <div className="container">
      <SquareBanner title="Wow">Check WHAT!</SquareBanner>
      <SquareBanner title="Men" />
    </div>
  );
}

export default Banners;
