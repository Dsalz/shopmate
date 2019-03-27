import Button from "@material-ui/core/Button";
import React from "react";
import bag from "../../assets/img/bag-vuitton.png";
import Paper from "../../hoc/Paper/Paper";
import ImageWithLabel from "../../UI/ImageWithLabel/ImageWithLabel";
import classes from "./SaleBanner.module.scss";

function SaleBanner() {
  return (
    <div className={`container ${classes.saleBanner}`}>
      <ImageWithLabel title="bag" img={bag} label="sale" />
      <div className={classes.text}>
        <h2>Vera Bradley</h2>
        <p>
          Carry the day in style with this extra-large tote crafted in our chic
          B.B. Collection textured PVC. Featuring colorful faux leather trim,
          this tote offers a roomy interior plus just enough perfectly placed
          pockets to keep smaller items organized and easy to find.
        </p>
        <Button className="button">Shop Now</Button>
      </div>
    </div>
  );
}

export default Paper(SaleBanner);
