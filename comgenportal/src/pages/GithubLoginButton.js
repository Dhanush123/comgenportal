import React from "react";
import GithubButton from "react-github-login-button";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../context";
import { createGithubLoginUrl } from "../requests/githubAuth";
import {
  GITHUB_AUTH_BASE_URL,
  GITHUB_SCOPE,
  GITHUB_CLIENT_ID,
} from "../constants";

const GithubLoginButton = () => {
  let history = useHistory();

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
