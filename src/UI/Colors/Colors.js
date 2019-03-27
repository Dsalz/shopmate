import React, { Component } from "react";
import Title from "../Title/Title";
import Color from "./Color/Color";
import classes from "./Colors.module.scss";

class Colors extends Component {
  state = {
    selectedColor: "green"
  };
  colors = ["blue", "lightblue", "red", "orange", "yellow", "green", "lila"];

  handleChange = color => {
    this.setState({ selectedColor: color });
  };
  render() {
    return (
      <div className={classes.colors}>
        <Title size={6}>Color</Title>
        <div className={classes.theColors}>
          {this.colors.map(color => (
            <Color
              key={color}
              value={color}
              name="productColor"
              checked={color === this.state.selectedColor}
              changed={() => this.handleChange(color)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Colors;
