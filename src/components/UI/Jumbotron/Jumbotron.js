import React from "react";
import Email from "../../Email/Email";
import Title from "../Title/Title";
import classes from "./Jumbotron.module.scss";

function Jumbotron() {
  return (
    <div className={`container ${classes.jumbotron}`}>
      <Title size={4}>10% Discount for your subscription</Title>
      <div>
        Carry the day in style with this extra-large tote crafted in our chic
        B.B. Collection textured PVC. Featuring colorful faux leather trim, this
        tote offers a roomy interior.
      </div>

      <Email />
    </div>
  );
}

export default Jumbotron;
