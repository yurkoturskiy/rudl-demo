import React from "react";

const Gradients = props => (
  <defs>
    <linearGradient id="reg-grad" x1="0" x2="0" y1="0" y2="1">
      <stop stopColor="#A9C9FF" offset="0%" />
      <stop stopColor="#FFBBEC" offset="100%" />
    </linearGradient>
    <linearGradient id="active-grad" x1="0" x2="0" y1="0" y2="1">
      <stop stopColor="#21D4FD" offset="0%" />
      <stop stopColor="#B721FF" offset="100%" />
    </linearGradient>
  </defs>
);

export default Gradients;
