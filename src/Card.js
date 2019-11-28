import React from "react";

function Card(props) {
  console.log("card props", props);
  return <div className="card" id={props.id} {...props.draggableItem} />;
}

export default Card;
