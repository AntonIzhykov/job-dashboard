import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AuthWrapper,
  Login,
  Forgot,
  Registration
} from "./components/Authentication";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={() => <AuthWrapper child={<Login />} />}
        />
        <Route
          path="/forgot"
          component={() => <AuthWrapper child={<Forgot />} withIcon={true} />}
        />
        <Route path="/signUp" component={() => <Registration />} />
      </Switch>
    </div>
  );
}

export default App;
