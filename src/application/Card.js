import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const getGradientNum = () => {
  return Math.round(Math.random() * 22);
};

function Card(props) {
  const { id, margin, width, height, isCircle } = props;
  const gradientId = useMemo(() => getGradientNum(), []);
  return (
    <motion.div
      className={`card g-${gradientId}`}
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
