import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../card-icon/card-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";

import logo from "../../assets/images/otplogo.png";

import "./navigation-header.scss";

const NavBar = ({ isAuth }) => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="" width="100px" height="100px" />
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/contact">
          CONTACT
        </NavLink>
        {isAuth ? (
          <div className="option" onClick={() => auth.signOut()} to="/">
            SIGN OUT
          </div>
        ) : (
          <NavLink className="option" to="/signin">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      <CartDropDown />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.user.isAuth
});

export default connect(mapStateToProps)(NavBar);
