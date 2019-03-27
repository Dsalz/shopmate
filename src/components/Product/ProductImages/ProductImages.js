import React, { useState } from "react";
import shirt1 from "../../../assets/img/shirt1.jpg";
import shirt2 from "../../../assets/img/shirt2.jpg";
import classes from "./ProductImages.module.scss";

function ProductImages() {
  const [img, setImg] = useState(shirt1);

  return (
    <div className={classes.productImages}>
      <img src={img} className="responsiveImage" alt="shirt1" />
      <div className={classes.secodaryImages}>
        <img src={shirt1} alt="shirt1" onClick={() => setImg(shirt1)} />
        <img src={shirt2} alt="shirt2" onClick={() => setImg(shirt2)} />
      </div>
    </div>
  );
}

export default ProductImages;
