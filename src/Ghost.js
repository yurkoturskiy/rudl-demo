import React from "react";

function Ghost(props) {
  return (
    <div
      style={{
        zIndex: 10,
        position: "fixed",
        visibility: "visible",
        left: props.x,
        top: props.y,
        pointerEvents: "none",
        transition: props.drag ? "none" : "left 0.2s, top 0.2s"
      }}
      onTransitionEnd={() => props.onGhostEndTransition()}
    >
      {props.children}
    </div>
  );
}

export default Ghost;
