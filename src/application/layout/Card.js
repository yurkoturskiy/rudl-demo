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
  const { id, margin, width, height, isCircle } = props;
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
    >
      <div onClick={() => setExpand(true)}>
        <motion.div
          className={`card g-${gradientId}`}
          id={id}
          style={{
            height: `${height - margin * 2}px`,
            width: `${width - margin * 2}px`,
            margin: `${margin}px`,
            "--opacity": visible ? 1 : 0
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
