import React from "react";
import CustomButtom from "../custom-button/custom-button";

import "./cart-dropdown.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButtom>Go To Checkout</CustomButtom>
  </div>
);

export default CartDropDown;
