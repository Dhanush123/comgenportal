import {
  GITHUB_AUTH_BASE_URL,
  GITHUB_SCOPE,
  GITHUB_CLIENT_ID,
  getWebServerUrl,
} from "../constants";
const axios = require("axios").default;

const getStoredAccessToken = () =>
  window.sessionStorage.getItem("access_token");

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

export const getUserGithubRepos = async () => {
  let reposRequestUrl = `${getWebServerUrl()}/getusergithubrepos?access_token=${getStoredAccessToken()}`;
  return await axios.get(reposRequestUrl);
};

export const toggleTrackGithubRepo = async (repo_id, toggleStatus) => {
  let repoTrackUrl = `${getWebServerUrl()}/toggletrackgithubrepo?access_token=${getStoredAccessToken()}&repo_id=${repo_id}&toggle_status=${toggleStatus}`;
  return await axios.post(repoTrackUrl);
};
