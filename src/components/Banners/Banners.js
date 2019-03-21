import Button from "@material-ui/core/Button";
import React from "react";
import menImg from "../../img/men.jpg";
import startingLineImg from "../../img/starting-line.jpeg";
import BannerWithPaper from "../UI/BannerWithPaper/BannerWithPaper";
import ImageWithLabel from "../UI/ImageWithLabel/ImageWithLabel";
import SquareBanner from "../UI/SquareBanner/SquareBanner";
import Title from "../UI/Title/Title";
import classes from "./Banners.module.scss";

function Banners() {
  return (
    <div className={`container ${classes.bannerContainers}`}>
      <div className={classes.squareBanners}>
        <SquareBanner title="WOW" bg="blue">
          Check WHAT!
        </SquareBanner>
        <SquareBanner title="MEN" bg="yellow" img={menImg} />
      </div>

      <div className={classes.bigBanner}>
        <BannerWithPaper>
          <ImageWithLabel
            title="let the game begin"
            img={startingLineImg}
            label="pop"
            labelColor="orange"
          />
          <div className={classes.paperInfo}>
            <Title>Let the Game begin</Title>
            <div>Registration is on - get ready for the Open</div>
            <Button className="button">Register</Button>
          </div>
        </BannerWithPaper>
      </div>
    </div>
  );
}

export default Banners;
