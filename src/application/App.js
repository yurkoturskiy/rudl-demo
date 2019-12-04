import React, { useState, useEffect } from "react";
import { StateProvider } from "../state/state";
import Layout from "./Layout";
import Logo from "./misc/Logo";
import GitHubBtn from "./misc/GitHubBtn";
import LayoutSwitcher from "./LayoutSwitcher";
import "../styles/App.css";
import "../styles/layout-switcher.css";
import "../styles/gradients.css";
import "@material/react-material-icon/dist/material-icon.css";

function App() {
  const margin = layout => {
    if (window.innerWidth <= 640) return 4;
    else return 12;
  };

  const tilesLayoutParams = () => ({
    layout: "tiles",
    layoutWidth: window.innerWidth,
    cardsWidth: window.innerWidth / 3 - margin() * 2,
    cardsMargin: margin()
  });

  const listCardsWidth = () => {
    let width = window.innerWidth;
    width = width > 1000 && 1000;
    // width =
  };

  const listLayoutParams = () => ({
    layout: "list",
    layoutWidth: window.innerWidth,
    cardsWidth:
      window.innerWidth > 1000
        ? 1000 - margin() * 2
        : window.innerWidth - margin() * 2,
    cardsMargin: margin()
  });

  const masonryLayoutParams = () => ({
    layout: "masonry",
    layoutWidth: window.innerWidth,
    cardsWidth: window.innerWidth / 3 - margin() * 2,
    cardsMargin: margin()
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
      <GitHubBtn />
      <Layout />
      <LayoutSwitcher />
    </StateProvider>
  );
}

export default App;
