import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function JobSearch() {
  const [isVisible, setIsVisible] = useState(false);
  const [delay] = useState(5000);
  const [livetime] = useState(2600);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), delay);
    setTimeout(() => setIsVisible(false), delay + livetime);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="job"
          initial={{ y: 0, rotate: -90, scale: 0 }}
          animate={{ y: 148, rotate: 0, scale: 1 }}
          exit={{ y: 0, rotate: -90, scale: 0 }}
          transition={{
            duration: 0.2,
            delay: 1,
            type: "spring"
          }}
        >
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
