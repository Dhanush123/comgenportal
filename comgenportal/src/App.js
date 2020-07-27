import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { AuthContext } from "./context";
import HomePage from "./pages/HomePage";
import LoginCallbackPage from "./pages/LoginCallbackPage";
import ReposPage from "./pages/ReposPage";
import GithubLoginButton from "./pages/GithubLoginButton";
import NavBar from "./pages/NavBar";
import AuthRoute from "./pages/AuthRoute";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAuth = () => {
      this.setState((state) => ({
        isAuthenticated: !state.isAuthenticated,
      }));
    };
    this.state = {
      isAuthenticated: false,
      toggleAuth: this.toggleAuth,
    };
  }
  render() {
    return (
      <Router>
        <div>
          <AuthContext.Provider value={this.state}>
            <GithubLoginButton />
            <NavBar />
            <Switch>
              <Route path="/logincallback" component={LoginCallbackPage} />
              <AuthRoute path="/repos" component={ReposPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </AuthContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
