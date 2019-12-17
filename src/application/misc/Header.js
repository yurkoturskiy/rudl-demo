import React from "react";
import Logo from "./Logo";
import Description from "./Description";
import GitHubBtn from "./GitHubBtn";
import CodeSandbox from "./CodeSandbox/CodeSandbox";
import JobSearch from "./JobSearch";
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
        <JobSearch />
        <Logo />
        <Description />
        <GitHubBtn />
        <CodeSandbox />
      </div>
    </>
  );
}

export default Header;
