import React from "react";
import Hompage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";

import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "../components/navigation-header/navigation-header";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
