import React, { useState, useEffect } from "react";
import Card from "./Card";
import Rudl from "./rudl";
import "./App.css";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function App() {
  const [numOfCards] = useState(50);
  const [cardsWidth, setCardsWidth] = useState(400);
  const [list, setList] = useState(false);

  const cards = Array.from(Array(numOfCards)).map((_, index) => {
    return (
      <Card
        key={index}
        width={cardsWidth}
        height={getRandomArbitrary(100, 200)}
        order={index}
        number={index + 1}
        id={index}
        index={index}
      />
    );
  });

  const switcher = () => {
    setList(list => !list);
  };

  useEffect(() => {
    setCardsWidth(list ? 1000 : 400);
  }, [list]);

  return (
    <div className="wrapper">
      <button onClick={() => switcher()}>more</button>
      <Rudl key="layout-for-pinned-notes">{cards}</Rudl>
    </div>
  );
}

export default App;
