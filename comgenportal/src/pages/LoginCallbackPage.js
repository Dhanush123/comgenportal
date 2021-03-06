import React from "react";
import { withRouter } from "react-router";
import { getGithubAccessTokenFromCode } from "../requests/github";
import { AuthContext } from "../context";

class LoginCallbackFunction extends React.Component {
  //https://reactjs.org/docs/context.html
  //https://reactjs.org/docs/hooks-reference.html
  componentDidMount() {
    const { location, history } = this.props;
    let url = new URL(`localhost:${process.env.PORT}/${location.search}`);
    let code = url.searchParams.get("code");
    let state = url.searchParams.get("state");
    getGithubAccessTokenFromCode(code, state)
      .then((res) => {
        console.log("getGithubAccessTokenFromCode", res);
        window.sessionStorage.setItem("access_token", res.data.access_token);
        this.setState({ isAuthenticated: true });
        this.context.toggleAuth();
        history.push("/repos");
      })
      .catch((err) => {
        console.log("getGithubAccessTokenFromCode", err);
      });
  }
  render() {
    return <h3>Authenticating user...</h3>;
  }
}

LoginCallbackFunction.contextType = AuthContext;
const LoginCallbackPage = withRouter(LoginCallbackFunction);
export default LoginCallbackPage;
