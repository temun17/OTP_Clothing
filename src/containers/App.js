import React from "react";
import Hompage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignInAndSignOutPage from "../pages/SignInAndSignOutPage/SignInAndSignOutPage";

import NavBar from "../components/navigation-header/navigation-header";

import { auth } from "../firebase/firebase.utils";

import { Route, Switch } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isAuth: false
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState(
        {
          isAuth: user
        },
        () => console.log(this.state)
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <NavBar isAuth={this.state.isAuth} />
        <Switch>
          <Route exact path="/" component={Hompage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
