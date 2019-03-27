import { Radio } from "@material-ui/core";
import React from "react";

function Color(props) {
  return (
    <Radio
      checked={props.checked}
      onChange={props.changed}
      value={props.value}
      name={props.name}
      aria-label={props.name}
      className="radio"
    />
  );
}

export default Color;
