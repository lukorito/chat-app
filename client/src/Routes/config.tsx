import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

function ProtectedRoute({ component: Component, ...rest }: any) {
  const [isAuthenticated, setIsAuthenticate] = useState(true);

  console.log(isAuthenticated);

  useEffect(() => {
    axiosInstance.get("/user").catch(e => {
      setIsAuthenticate(false);
    });
  }, []);

  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                  error: {
                    status: 401,
                    message: "Session Ended! Please login again"
                  }
                }
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
}
export default ProtectedRoute;
