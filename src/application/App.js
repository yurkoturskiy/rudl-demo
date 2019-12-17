import React, { useState, useEffect } from "react";
import { StateProvider } from "../state/state";
import Layout from "./layout/Layout";
import Header from "./misc/Header";
import LayoutSwitcher from "./layout/LayoutSwitcher";
import JobSearch from "./misc/JobSearch";
import "../styles/App.css";
import "../styles/layout-switcher.css";
import "../styles/dialog-window.css";
import "../styles/gradients.css";
import "@material/react-material-icon/dist/material-icon.css";

function App() {
  const masterWidth = () => {
    let width = Math.round(window.innerWidth - (window.innerWidth / 100) * 4);
    return width > 1900 ? 1900 : width;
  };

  const margin = layout => {
    if (masterWidth() <= 640) return 4;
    else return 12;
  };

  const borderWidth = () => (masterWidth() <= 640 ? 2 : 4);

  const dialogBorderWidth = () => (masterWidth() <= 640 ? 4 : 8);

  const tilesCardsWidth = () => {
    let width = masterWidth();
    let numOfColumns = width > 640 ? 3 : 2;
    return width / numOfColumns - 2;
  };

  const tilesLayoutParams = () => {
    const cardsWidth = tilesCardsWidth();
    const cardsHeightRange = [cardsWidth, cardsWidth];
    return {
      layout: "tiles",
      cardsWidth,
      cardsHeightRange,
      cardsMargin: margin(),
      cardsBorderWidth: borderWidth(),
      dialogBorderWidth: dialogBorderWidth()
    };
  };

  const listCardsWidth = () => {
    let width = masterWidth() - 2;
    return width > 1000 ? 1000 : width;
  };

  const listLayoutParams = () => {
    const cardsWidth = listCardsWidth();
    const cardsHeightRange = [cardsWidth / 3, cardsWidth / 3];
    return {
      layout: "list",
      cardsWidth,
      cardsHeightRange,
      cardsMargin: margin(),
      cardsBorderWidth: borderWidth(),
      dialogBorderWidth: dialogBorderWidth()
    };
  };

  const masonryCardsWidth = () => {
    let width = masterWidth();
    let numOfColumns = width > 640 ? 4 : 3;
    return width / numOfColumns - 2;
  };

  const masonryLayoutParams = () => {
    const cardsWidth = masonryCardsWidth();
    const cardsHeightRange = [cardsWidth / 2.5, cardsWidth * 1.4];
    return {
      layout: "masonry",
      cardsWidth,
      cardsHeightRange,
      cardsMargin: margin(),
      cardsBorderWidth: borderWidth(),
      dialogBorderWidth: dialogBorderWidth()
    };
  };

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
      <JobSearch />
      <Header />
      <Layout />
      <LayoutSwitcher />
    </StateProvider>
  );
}

export default App;
