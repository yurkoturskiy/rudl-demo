import React, { useState } from "react";
import Card from "./Card";
import Rudl from "./rudl";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function Layout(props) {
  const [numOfCards] = useState(50);
  const [cardsWidth, setCardsWidth] = useState(100);

  const cards = Array.from(Array(numOfCards)).map((_, index) => {
    return (
      <Card
        key={index}
        width={cardsWidth}
        height={getRandomArbitrary(300, 500)}
        order={index}
        number={index + 1}
        id={index}
        index={index}
      />
    );
  });

  return (
    <div className="cards-wrapper">
      <Rudl key="layout-for-pinned-notes">{cards}</Rudl>
    </div>
  );
}

export default Layout;
