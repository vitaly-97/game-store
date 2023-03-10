import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartMenu } from "../cartMenu/CartMenu";
import { ItemsInCart } from "../itemsInCart/ItemsInCart";
import { calcTotalPrice } from "../../utils";
import { HiShoppingCart } from "react-icons/hi";
import "./cart.css";

const Cart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className="cart">
      <ItemsInCart quantity={items.length} />
      <HiShoppingCart
        size={30}
        className="icon"
        onClick={() => setIsCartVisible(!isCartVisible)}
      />
      {totalPrice > 0 ? <span className="price">{totalPrice} руб.</span> : null}
      {isCartVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default Cart;
