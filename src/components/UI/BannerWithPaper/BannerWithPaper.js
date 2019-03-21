import React from "react";
import Paper from "../../../hoc/Paper/Paper";

function BannerWithPaper(props) {
  return <>{props.children}</>;
}

export default Paper(BannerWithPaper);
