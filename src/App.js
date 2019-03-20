import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import React, { Component } from "react";
import JssProvider from "react-jss/lib/JssProvider";
import "./App.scss";
import TopBar from "./components/TopBar/TopBar";

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
        <TopBar />
      </JssProvider>
    );
  }
}

export default App;
