import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/otplogo.png";

import "./navigation-header.scss";

const NavBar = () => {
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
      </div>
    </div>
  );
};

export default NavBar;
