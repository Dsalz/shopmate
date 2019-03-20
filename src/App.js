import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { create } from "jss";
import React, { Component } from "react";
import JssProvider from "react-jss/lib/JssProvider";
import "./App.scss";
import TopBar from "./components/TopBar/TopBar";
import theme from "./theme";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById("jss-insertion-point")
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <TopBar />
        </JssProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
