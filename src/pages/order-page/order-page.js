import React from "react";
import {useSelector} from "react-redux";

import "./order-page.css";
import { OrderItem } from "../../components/order-item";
import { calcTotalPrice } from "../../components/utils";

export const OrderPage = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  if(items.length < 1) {
    return <h1 style={{fontFamily: "'Koulen', cursive", textAlign: "center"}}>Cart is empty</h1>
  }

  return (
      <div className="order-page">
        <div className="order-page__left">
          {items.map(game => <OrderItem game={game} />)}
        </div>
        <div className="order-page__right">
          <div className="order-page__total-rice">
            <span>{items.length} items in the amount of {totalPrice} UAH</span>
          </div>
        </div>
      </div>
  )
};