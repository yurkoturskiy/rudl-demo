import React, { useState, useEffect } from "react";
import { StateProvider } from "../state/state";
import Layout from "./Layout";
import Logo from "./misc/Logo";
import Description from "./misc/Description";
import GitHubBtn from "./misc/GitHubBtn";
import LayoutSwitcher from "./LayoutSwitcher";
import "../styles/App.css";
import "../styles/layout-switcher.css";
import "../styles/gradients.css";
import "@material/react-material-icon/dist/material-icon.css";

function App() {
  const masterWidth = () => {
    return window.innerWidth - (window.innerWidth / 100) * 4;
  };

  const margin = layout => {
    if (masterWidth() <= 640) return 4;
    else return 12;
  };

  const tilesLayoutParams = () => ({
    layout: "tiles",
    layoutWidth: masterWidth(),
    cardsWidth: masterWidth() / 3,
    cardsMargin: margin()
  });

  const listCardsWidth = () => {
    let width = masterWidth();
    width = width > 1000 && 1000;
    // width =
  };

  const listLayoutParams = () => ({
    layout: "list",
    layoutWidth: masterWidth(),
    cardsWidth: masterWidth() > 1000 ? 1000 - margin() * 2 : masterWidth(),
    cardsMargin: margin()
  });

  const masonryLayoutParams = () => ({
    layout: "masonry",
    layoutWidth: masterWidth(),
    cardsWidth: masterWidth() / 3,
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
      <Description />
      <GitHubBtn />
      <Layout />
      <LayoutSwitcher />
    </StateProvider>
  );
}

export default App;
