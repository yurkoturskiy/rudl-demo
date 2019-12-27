import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function JobSearch() {
  const [isVisible, setIsVisible] = useState(false);
  const [delay] = useState(5000);
  const [livetime] = useState(3100);
  const [livetimeDisplay, setLivetimeDisplay] = useState(3);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), delay);
    setTimeout(() => setIsVisible(false), delay + livetime);
  }, [delay, livetime]);
  useEffect(() => {
    isVisible &&
      setTimeout(
        () => setLivetimeDisplay(livetimeDisplay => livetimeDisplay - 1),
        1000
      );
  }, [isVisible, livetimeDisplay]);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="job"
          initial={{ y: 0, rotate: -90, scale: 0 }}
          animate={{ y: 148, rotate: 0, scale: 1 }}
          exit={{ y: 0, rotate: -90, scale: 0 }}
          transition={{
            type: "spring"
          }}
        >
          <span className="counter">{livetimeDisplay}</span>
          The author is looking for a job{" "}
          <span role="img" aria-label="sheep">
            🧐
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default JobSearch;
