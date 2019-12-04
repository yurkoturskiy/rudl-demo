import React from "react";
import GitHubButton from "react-github-btn";

function GitHubBtn(props) {
  return (
    <div className="github-button">
      <GitHubButton
        href="https://github.com/guandjoy/rudl"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-size="large"
        data-show-count="true"
        aria-label="Star guandjoy/rudl on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  );
}

export default GitHubBtn;
