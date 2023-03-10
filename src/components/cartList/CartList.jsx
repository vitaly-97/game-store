import React from "react";
import "./cartList.css";

export const CartList = ({ title, price, id }) => {
  return (
    <div className="cart-list">
      <span>{title}</span>
      <div className="cart-list-price">
        <span>{price} руб.</span>
      </div>
    </div>
  );
};
