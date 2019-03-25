import React from "react";
import Container from "../../../hoc/Container/Container";
import Paper from "../../../hoc/Paper/Paper";
import converse from "../../../img/converse.jpg";

function BannerEndCategory() {
  return <img className="responsiveImage" src={converse} alt="converse" />;
}

export default Container(Paper(BannerEndCategory));
