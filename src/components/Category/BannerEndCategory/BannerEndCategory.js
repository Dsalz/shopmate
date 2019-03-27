import React from "react";
import converse from "../../../assets/img/converse.jpg";
import Container from "../../../hoc/Container/Container";
import Paper from "../../../hoc/Paper/Paper";

function BannerEndCategory() {
  return <img className="responsiveImage" src={converse} alt="converse" />;
}

export default Container(Paper(BannerEndCategory));
