import React from 'react';
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedInUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;