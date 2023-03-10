import React from "react";
import { CartList } from "../cartList/CartList";
import { MyButton } from "../myButton/MyButton";
import { calcTotalPrice } from "../../utils";
import "./cartMenu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu-games">
        {items.length > 0
          ? items.map((game) => (
              <CartList
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu-arrange">
          <div className="cart-menu-total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <MyButton type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </MyButton>
        </div>
      ) : null}
    </div>
  );
};
