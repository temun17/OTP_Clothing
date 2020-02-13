import React from "react";
import Hompage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignInAndSignOutPage from "../pages/SignInAndSignOutPage/SignInAndSignOutPage";

import NavBar from "../components/navigation-header/navigation-header";

import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from "../redux/user/user-actions";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { isAuth } = this.props;
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Hompage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              isAuth ? <Redirect to="/" /> : <SignInAndSignOutPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
