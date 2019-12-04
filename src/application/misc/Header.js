import React from "react";
import Logo from "./Logo";
import Description from "./Description";
import GitHubBtn from "./GitHubBtn";
// State
import { useStateValue } from "../../state/state";

function Header(props) {
  // State
  const [{ layoutWidth, cardsMargin }] = useStateValue();
  return (
    <>
      <div
        className="header"
        style={{
          "--layout-width": `${layoutWidth}px`,
          "--cards-margin": `${cardsMargin}px`
        }}
      >
        <Logo />
        <Description />
        <GitHubBtn />
      </div>
    </>
  );
}

export default Header;
