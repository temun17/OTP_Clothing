import React from "react";
import Hompage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignInAndSignOutPage from "../pages/SignInAndSignOutPage/SignInAndSignOutPage";

import NavBar from "../components/navigation-header/navigation-header";

import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
