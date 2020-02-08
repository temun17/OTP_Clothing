import React from "react";
import Hompage from "../pages/Hompage/Hompage";

import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Hompage} />
      </Switch>
    </div>
  );
}

export default App;
