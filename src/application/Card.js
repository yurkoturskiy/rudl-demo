import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Card(props) {
  const { id, height, width, margin } = props;
  return (
    <motion.div
      className="card"
      id={id}
      style={{
        height: `${height - margin * 2}px`,
        width: `${width - margin * 2}px`,
        margin: `${margin}px`
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{
        scale: 0.98
      }}
      {...props.draggableItem}
    />
  );
}

export default Card;
