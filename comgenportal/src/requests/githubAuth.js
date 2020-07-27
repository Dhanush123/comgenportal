import {
  GITHUB_AUTH_BASE_URL,
  GITHUB_SCOPE,
  GITHUB_CLIENT_ID,
  getWebServerUrl,
} from "../constants";
const axios = require("axios").default;

export const createGithubLoginUrl = () => {
  let len = 32,
    githubState = "";
  while (githubState.length < len) {
    githubState += Math.random().toString(36).substr(2);
  }
  githubState = githubState.substr(0, len);
  let githubFullAuthUrl = `${GITHUB_AUTH_BASE_URL}?client_id=${GITHUB_CLIENT_ID}&state=${githubState}&scope=${GITHUB_SCOPE}&allow_signup=true`;
  return githubFullAuthUrl;
};

export const getGithubAccessTokenFromCode = async (code, state) => {
  let codeToTokenUrl = `${getWebServerUrl()}/githubcodetotoken?code=${code}&state=${state}`;
  //redirect to repos page if get auth token
  return await axios.post(codeToTokenUrl);
};
