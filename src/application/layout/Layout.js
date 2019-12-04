import React, { useState, useEffect, useMemo } from "react";
import { useStateValue } from "../../state/state";
import Card from "./Card";
import Rudl from "../rudl/rudl";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function Layout(props) {
  const [numOfCards] = useState(50);

  // State
  const [
    { layout, layoutWidth, cardsWidth, cardsMargin, cardsHeightRange },
    dispatch
  ] = useStateValue();

  // Set cards height
  const cardsHeight = useMemo(
    () =>
      Array.from(Array(numOfCards)).map(() =>
        getRandomArbitrary(...cardsHeightRange)
      ),
    [cardsHeightRange]
  );

  // Prepare cards Components
  const cards = Array.from(Array(numOfCards)).map((_, index) => {
    return (
      <Card
        key={index}
        width={cardsWidth}
        height={cardsHeight[index]}
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
      style={{
        width: `96vw`,
        overflow: "hidden"
      }}
    >
      <Rudl
        key="layout-for-pinned-notes"
        onWidthResize={() => dispatch({ type: layout })}
      >
        {cards}
      </Rudl>
    </div>
  );
}

export default Layout;
