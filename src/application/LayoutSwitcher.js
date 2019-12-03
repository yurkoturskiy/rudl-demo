import React from "react";
import { useStateValue } from "../state/state";
import { motion } from "framer-motion";
import MaterialIcon from "@material/react-material-icon";

function LayoutSwitcher(props) {
  const [{ layout }, dispatch] = useStateValue();
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
        <MaterialIcon
          icon="view_module"
          className={`layout-icon ${layout === "tiles" && "active"}`}
          onClick={() => dispatch({ type: "tiles" })}
        />
      </motion.div>
      <motion.div className="layout-icon-wrapper" {...item("list")}>
        <MaterialIcon
          icon="view_agenda"
          className={`layout-icon ${layout === "list" && "active"}`}
          onClick={() => dispatch({ type: "list" })}
        />
      </motion.div>
      <motion.div className="layout-icon-wrapper" {...item("masonry")}>
        <MaterialIcon
          icon="view_quilt"
          className={`layout-icon ${layout === "masonry" && "active"}`}
          onClick={() => dispatch({ type: "masonry" })}
        />
      </motion.div>
    </motion.div>
  );
}

export default LayoutSwitcher;
