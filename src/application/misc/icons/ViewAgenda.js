import React from "react";
import Gradients from "./Gradients";

const ViewAgenda = props => (
  <svg width={48} height={48} {...props} viewBox="0 0 24 24">
    <Gradients />
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"
      fill={`url(#${props.isActive ? "active-grad" : "reg-grad"})`}
    />
  </svg>
);

export default ViewAgenda;
