import React from "react";
import logo from "./logo.svg";
import Card from "./Card";
import DraggableMasonryLayout from "react-universal-dnd-layout";
import "./App.css";

function App() {
  const cards = Array.from(Array(10)).map((_, index) => <Card key={index} />);
  return <div className="App">{cards}</div>;
}

export default App;
