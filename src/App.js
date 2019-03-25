import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import React, { Component } from "react";
import JssProvider from "react-jss/lib/JssProvider";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Category from "./components/Category/Category";
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
      <BrowserRouter>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <>
          <Route path="/" exact component={Homepage} />
          <Route path="/category/:name" exact component={Category} />
          </>
        </JssProvider>
      </BrowserRouter>
    );
  }
}

export default App;
