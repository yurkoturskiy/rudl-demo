import React, { useState, useEffect } from "react";
import { StateProvider } from "../state/state";
import Layout from "./Layout";
import Logo from "./misc/Logo";
import LayoutSwitcher from "./LayoutSwitcher";
import "../styles/App.css";
import "../styles/layout-switcher.css";
import "@material/react-material-icon/dist/material-icon.css";

function App() {
  const tilesLayoutParams = () => ({
    layout: "tiles",
    layoutWidth: window.innerWidth,
    cardsWidth: window.innerWidth / 3,
    cardsMargin: 12
  });

  const listLayoutParams = () => ({
    layout: "list",
    layoutWidth: window.innerWidth,
    cardsWidth: window.innerWidth / 3,
    cardsMargin: 12
  });

  const masonryLayoutParams = () => ({
    layout: "masonry",
    layoutWidth: window.innerWidth,
    cardsWidth: window.innerWidth / 3,
    cardsMargin: 12
  });

  const initialState = masonryLayoutParams();

  const reducer = (state, action) => {
    switch (action.type) {
      case "tiles":
        return tilesLayoutParams();
      case "list":
        return listLayoutParams();
      case "masonry":
        return masonryLayoutParams();
      default:
        return initialState;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Logo />
      <Layout />
      <LayoutSwitcher />
    </StateProvider>
  );
}

export default App;
