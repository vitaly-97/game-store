import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/orderItem/OrderItem";
import { calcTotalPrice } from "../../utils";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (!items.length) {
    return <h1>Корзина пуста</h1>;
  }

  return (
    <div className="order-page">
      <div className="order-page-left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>

      <div className="order-page-right">
        <div className="order-page-total-price">
          <span>
            {items.length} товаров на {calcTotalPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  );
};
