import React, { useState, useEffect, useMemo } from "react";
import { useStateValue } from "../../state/state";
import Card from "./Card";
import Rudl from "rudl";

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

function Layout(props) {
  const [numOfCards] = useState(50);

  // State
  const [
    {
      layout,
      layoutWidth,
      cardsWidth,
      cardsMargin,
      cardsHeightRange,
      cardsBorderWidth,
      dialogBorderWidth
    },
    dispatch
  ] = useStateValue();

  // Set cards height
  const cardsHeight = useMemo(
    () =>
      Array.from(Array(numOfCards)).map(() =>
        getRandomArbitrary(...cardsHeightRange)
      ),
    [cardsHeightRange, numOfCards]
  );

  // Prepare cards Components
  const cards = Array.from(Array(numOfCards)).map((_, index) => {
    return (
      <Card
        key={index}
        width={cardsWidth}
        height={cardsHeight[index]}
        margin={cardsMargin}
        borderWidth={cardsBorderWidth}
        dialogBorderWidth={dialogBorderWidth}
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
        transitionTimingFunction="cubic-bezier(.42,.2,.23,1.27)"
        ghostTransitionDuration={300}
        ghostTransitionTimingFunction="cubic-bezier(.42,.2,.23,1.27)"
      >
        {cards}
      </Rudl>
    </div>
  );
}

export default Layout;
