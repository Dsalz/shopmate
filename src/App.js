import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import React, { Component } from "react";
import JssProvider from "react-jss/lib/JssProvider";
import "./App.scss";
import Homepage from "./components/Homepage/Homepage";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById("jss-insertion-point")
});

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <Homepage />
      </JssProvider>
    );
  }
}

export default App;
