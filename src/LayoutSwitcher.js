import React from "react";
import { useStateValue } from "./state";
import MaterialIcon from "@material/react-material-icon";

function LayoutSwitcher(props) {
  const [{ layout }, dispatch] = useStateValue();
  return (
    <div className="layout-menu">
      <MaterialIcon
        icon="view_module"
        className={`layout-icon ${layout === "tiles" && "active"}`}
        onClick={() => dispatch({ type: "tiles" })}
      />
      <MaterialIcon
        icon="view_agenda"
        className={`layout-icon ${layout === "list" && "active"}`}
        onClick={() => dispatch({ type: "list" })}
      />
      <MaterialIcon
        icon="view_quilt"
        className={`layout-icon ${layout === "masonry" && "active"}`}
        onClick={() => dispatch({ type: "masonry" })}
      />
    </div>
  );
}

export default LayoutSwitcher;
