import React, { useState, useEffect } from "react";
import { useStateValue } from "../../state/state";
import { motion } from "framer-motion";
import ViewModule from "../misc/icons/ViewModule";
import ViewQuilt from "../misc/icons/ViewQuilt";
import ViewAgenda from "../misc/icons/ViewAgenda";

function LayoutSwitcher(props) {
  const [{ layout }, dispatch] = useStateValue();

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  const item = type => {
    if (layout === type)
      return {
        whileTap: {
          scale: 0.99
        }
      };
    return {
      whileHover: { scale: 1.1 },
      whileTap: {
        scale: 0.9
      }
    };
  };
  return (
    <>
      {isVisible && (
        <motion.div
          className="layout-menu"
          initial={{ y: 500, scale: 2, rotate: -90 }}
          animate={{ y: 0, scale: 1, rotate: 0 }}
          whileTap={{
            scale: 0.9
          }}
          transition={{
            type: "spring",
            // delay: 1,
            stiffness: 260,
            damping: 20
          }}
        >
          <motion.div className="layout-icon-wrapper" {...item("tiles")}>
            <ViewModule
              isActive={layout === "tiles"}
              className={`layout-icon ${layout === "tiles" && "active"}`}
              onClick={() => dispatch({ type: "tiles" })}
            />
          </motion.div>
          <motion.div className="layout-icon-wrapper" {...item("list")}>
            <ViewAgenda
              isActive={layout === "list"}
              className={`layout-icon ${layout === "list" && "active"}`}
              onClick={() => dispatch({ type: "list" })}
            />
          </motion.div>
          <motion.div className="layout-icon-wrapper" {...item("masonry")}>
            <ViewQuilt
              isActive={layout === "masonry"}
              className={`layout-icon ${layout === "masonry" && "active"}`}
              onClick={() => dispatch({ type: "masonry" })}
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default LayoutSwitcher;
