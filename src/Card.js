import React, { useState, useEffect } from "react";

function Card(props) {
  return (
    <div
      className="card"
      id={props.id}
      style={{
        height: `${props.height - 24}px`,
        width: `${props.width - 24}px`
      }}
      {...props.draggableItem}
    />
  );
}

export default Card;
