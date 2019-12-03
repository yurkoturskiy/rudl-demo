import React, { useState } from "react";
import { useStateValue } from "../state/state";
import Card from "./Card";
import Rudl from "./rudl/rudl";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function Layout(props) {
  const [numOfCards] = useState(50);
  const [
    { layout, layoutWidth, cardsWidth, cardsMargin },
    dispatch
  ] = useStateValue();

  const cards = Array.from(Array(numOfCards)).map((_, index) => {
    return (
      <Card
        key={index}
        width={cardsWidth}
        height={getRandomArbitrary(300, 500)}
        margin={cardsMargin}
        order={index}
        number={index + 1}
        id={index}
        index={index}
      />
    );
  });

  return (
    <div
      className="cards-wrapper"
      style={{ width: `${layoutWidth}px`, overflow: "hidden" }}
    >
      <Rudl key="layout-for-pinned-notes">{cards}</Rudl>
    </div>
  );
}

export default Layout;
