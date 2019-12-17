import React from "react";
import Gradients from "./Gradients";

const ViewModule = props => (
  <svg width={48} height={48} {...props} viewBox="0 0 24 24">
    <Gradients />
    <path
      d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"
      fill={`url(#${props.isActive ? "active-grad" : "reg-grad"})`}
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default ViewModule;
