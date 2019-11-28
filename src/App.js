import React from "react";
import Card from "./Card";
import DraggableMasonryLayout from "react-universal-dnd-layout";
import "./App.css";

function App() {
  const cards = Array.from(Array(10)).map((_, index) => (
    <Card key={index} order={index} number={index + 1} id={index} />
  ));
  return (
    <div className="wrapper">
      <DraggableMasonryLayout key="layout-for-pinned-notes">
        {cards}
      </DraggableMasonryLayout>
    </div>
  );
}

export default App;
