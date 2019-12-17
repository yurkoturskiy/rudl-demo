import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// State
import { StateProvider } from "./state/state";
import { initialState, reducer } from "./state/layoutReducer";
// Local components
import Layout from "./application/layout/Layout";
import Header from "./application/misc/Header";
import LayoutSwitcher from "./application/layout/LayoutSwitcher";
// Styles
import "./styles/App.css";
import "./styles/layout-switcher.css";
import "./styles/dialog-window.css";
import "./styles/gradients.css";
import "@material/react-material-icon/dist/material-icon.css";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header />
      <Layout />
      <LayoutSwitcher />
    </StateProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
