import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { Main, Login } from "./page";
function App() {
  const [auth, setAuth] = useState<any>({
    isAdmin: null,
    token: null,
  });
  useEffect(
    () =>
      setAuth({
        isAdmin: localStorage.getItem("isAdmin"),
        token: localStorage.getItem("token"),
      }),
    []
  );
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Main" component={Main} />
          <Route
            path="/"
            render={() =>
              auth.token !== null ? (
                <Redirect
                  to={{
                    pathname: "/Main",
                  }}
                />
              ) : (
                <Redirect
                  to={{
                    pathname: "/Login",
                  }}
                />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
