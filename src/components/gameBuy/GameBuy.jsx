import React from "react";
import { MyButton } from "../myButton/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { addItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";
import "./gameBuy.css";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (event) => {
    event.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(addItemInCart(game));
    }
  };

  return (
    <div className="game-buy">
      <span className="game-price">{game.price} руб.</span>
      <MyButton
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Убрать из корзины" : "В корзину"}
      </MyButton>
    </div>
  );
};
