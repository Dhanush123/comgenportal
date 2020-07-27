const DEV_PORTAL_URL = "";
const PROD_PORTAL_URL = "";
const DEV_WEBSERVER_URL = "http://127.0.0.1:5000";
const PROD_WEBSERVER_URL = "";

export const getPortalUrl = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return DEV_PORTAL_URL;
  } else {
    return PROD_PORTAL_URL;
  }
};

export const getWebServerUrl = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return DEV_WEBSERVER_URL;
  } else {
    return PROD_WEBSERVER_URL;
  }
};

export const GITHUB_AUTH_BASE_URL = "https://github.com/login/oauth/authorize";
export const GITHUB_SCOPE = "repo";
export const GITHUB_CLIENT_ID = "395712fcbff22cc6bddf";
