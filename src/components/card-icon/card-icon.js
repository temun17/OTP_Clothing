import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../../redux/cart/cart-actions";

import "./card-icon.scss";

const CartIcon = ({ toggleCartDropdown }) => (
  <div className="cart-icon">
    <ShoppingIcon onClick={toggleCartDropdown} className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
