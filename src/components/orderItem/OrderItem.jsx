import React from "react";
import { useDispatch } from "react-redux";
import { GameCover } from "../gameCover/GameCover";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./orderItem.css";

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className="order-item">
      <div className="order-cover">
        <GameCover image={game.image} />
      </div>

      <div className="order-title">
        <span>{game.title}</span>
      </div>

      <div className="order-price">
        <span>{game.price} руб.</span>
        <AiOutlineCloseCircle className="delete-icon" onClick={handleClick} />
      </div>
    </div>
  );
};
