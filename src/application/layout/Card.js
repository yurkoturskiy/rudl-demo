import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
// Components
import DialogWindow from "./DialogWindow";

const getGradientNum = () => {
  return Math.round(Math.random() * 22);
};

function Card(props) {
  const [expand, setExpand] = useState(false);
  const [visible, setVisible] = useState(true);
  const { id, margin, width, height, borderWidth, dialogBorderWidth } = props;
  const gradientId = useMemo(() => getGradientNum(), []);

  const switchVisibility = () => {
    setVisible(visible => !visible);
  };
  return (
    <DialogWindow
      node={{ id, gradientId }}
      expand={expand}
      setExpand={setExpand}
      switchVisibility={switchVisibility}
      borderWidth={dialogBorderWidth}
      cardBorderWidth={borderWidth}
    >
      <div onClick={() => setExpand(true)} style={{ margin: `${margin}px` }}>
        <motion.div
          className={`card g-${gradientId}`}
          id={id}
          style={{
            height: `${height - margin * 2}px`,
            width: `${width - margin * 2}px`,
            "--opacity": visible ? 1 : 0,
            "--card-box-shadow": `0 0 0 2px rgba(182, 182, 182, 0), inset 0 0 0 ${borderWidth}px white, 0px 0px 2px 0px rgba(0, 0, 0, 0.2)`,
            "--card-box-shadow-hover": `inset 0 0 0 ${borderWidth}px white, 0px 0px 4px 0px rgba(0, 0, 0, 0.2)`,
            "--card-box-shadow-ghost": `0 0 0 2px rgba(182, 182, 182, 0), inset 0 0 0 ${borderWidth}px white, 0px 0px 22px 0px rgba(0, 0, 0, 0.33)`
          }}
          whileHover={{ scale: 1.01 }}
          whileTap={{
            scale: 0.98
          }}
          {...props.draggableItem}
        />
      </div>
    </DialogWindow>
  );
}

export default Card;
