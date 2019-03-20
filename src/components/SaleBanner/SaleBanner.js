import Button from "@material-ui/core/Button";
import React from "react";
import Paper from "../UI/Paper/Paper";

function SaleBanner() {
  return (
    <div>
      This is a banner.
      <h2>Vera Bradley</h2>
      <p>
        Carry the day in style with this extra-large tote crafted in our chic
        B.B. Collection textured PVC. Featuring colorful faux leather trim, this
        tote offers a roomy interior plus just enough perfectly placed pockets
        to keep smaller items organized and easy to find.
      </p>
      <Button className="button">Shop Now</Button>
    </div>
  );
}

export default Paper(SaleBanner);
