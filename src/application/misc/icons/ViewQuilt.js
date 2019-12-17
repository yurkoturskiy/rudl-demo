import React from "react";
import Gradients from "./Gradients";

const ViewQuilt = props => (
  <svg width={48} height={48} {...props} viewBox="0 0 24 24">
    <Gradients />
    <path
      d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"
      fill={`url(#${props.isActive ? "active-grad" : "reg-grad"})`}
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default ViewQuilt;
