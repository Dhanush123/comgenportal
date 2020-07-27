import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context";

const AuthRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ isAuthenticated }) => (
      <Route
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
        }
        {...rest}
      />
    )}
  </AuthContext.Consumer>
);

export default AuthRoute;
