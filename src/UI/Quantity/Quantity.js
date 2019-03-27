import { Button } from "@material-ui/core";
import React, { Component } from "react";
import Title from "../Title/Title";
import classes from "./Quantity.module.scss";

class Quantity extends Component {
  state = {
    quantity: 1
  };

  handleChange = event => {
    this.setState({
      quantity: event.target.value
    });
  };

  handleIncrement = () => {
    this.setState(state => {
      return { quantity: +state.quantity + 1 };
    });
  };

  handleDecrement = () => {
    this.setState(state => {
      const newVal = state.quantity > 0 ? state.quantity - 1 : 0;
      return { quantity: newVal };
    });
  };

  render() {
    return (
      <div className={classes.quantity}>
        <Title size={6}>Quantity</Title>
        <Button onClick={this.handleDecrement}>-</Button>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.quantity}
        />
        <Button onClick={this.handleIncrement}>+</Button>
      </div>
    );
  }
}

export default Quantity;
