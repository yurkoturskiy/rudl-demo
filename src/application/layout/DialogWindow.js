import React, { useState, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

function DialogWindow(props) {
  const [cardWidth, setCardWidth] = useState();
  const [cardHeight, setCardHeight] = useState();
  const [cardPosX, setCardPosX] = useState();
  const [cardPosY, setCardPosY] = useState();
  const { node, cardBorderWidth, borderWidth } = props;

  // Set and update card's size
  const updateCardParams = () => {
    const element = document.getElementById(node.id);
    setCardHeight(`${element.offsetHeight}px`);
    setCardWidth(`${element.offsetWidth}px`);
  };
  useEffect(() => {
    const element = document.getElementById(node.id);
    setCardHeight(`${element.offsetHeight}px`);
    setCardWidth(`${element.offsetWidth}px`);
    window.addEventListener("resize", updateCardParams);
    return () => window.removeEventListener("resize", updateCardParams);
  }, []);

  // Set and update card's position
  useEffect(() => {
    const element = document.getElementById(node.id);
    var rect = element.getBoundingClientRect();
    setCardPosX(rect.left);
    setCardPosY(rect.top);
    setCardHeight(`${element.offsetHeight}px`);
    setCardWidth(`${element.offsetWidth}px`);
  }, [props, node.id]);

  const closeEdit = () => {
    // Send new data to the server and close dialog window
    props.setExpand(false);
  };

  return (
    <div
      className="dialog-wrapper"
      style={{
        "--card-width": cardWidth,
        "--card-height": cardHeight,
        "--card-pos-x": `${cardPosX}px`,
        "--card-pos-y": `${cardPosY}px`
      }}
    >
      <CSSTransition
        in={props.expand}
        timeout={300}
        classNames="dialog"
        onEnter={() => props.switchVisibility()}
        onExited={() => props.switchVisibility()}
        unmountOnExit
      >
        <div
          className={`card-expand-window g-${node.gradientId}`}
          id={`${node.id}-dialog`}
          onClick={() => closeEdit()}
          style={{
            "--card-box-shadow": `0 0 0 2px rgba(182, 182, 182, 0), inset 0 0 0 ${cardBorderWidth}px white, 0px 0px 2px 0px rgba(0, 0, 0, 0.2)`,
            "--dialog-box-shadow": `0 0 0 2px rgba(182, 182, 182, 0), inset 0 0 0 ${borderWidth}px white, 0px 0px 50px 0px rgba(0, 0, 0, 0.3)`
          }}
        />
      </CSSTransition>
      {props.expand && (
        <div className="dialog-background" onClick={() => closeEdit()} />
      )}
      {props.children}
    </div>
  );
}

DialogWindow.propTypes = {
  expand: PropTypes.bool,
  setExpand: PropTypes.func
};

export default DialogWindow;
