import React from "react";
import GithubButton from "react-github-login-button";

import { AuthContext } from "../context";
import { createGithubLoginUrl } from "../requests/githubAuth";

const GithubLoginButton = () => {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated }) =>
        !isAuthenticated ? (
          <div className="github-button">
            <GithubButton
              onClick={() => {
                console.log("Github button clicked");
                window.location.href = createGithubLoginUrl();
              }}
            />
          </div>
        ) : (
          <div />
        )
      }
    </AuthContext.Consumer>
  );
};

export default GithubLoginButton;
