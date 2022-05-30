import React from "react";
import "./cart-menu.css";
import { calcTotalPrice } from "../utils";
import { CartItem } from "../cart-item";
import { Button } from "../button";

export const CartMenu = ({ items, onClick }) => {
  const totalPrice = calcTotalPrice(items);

  return (
      <div className="cart-menu">
        <div className="cart-menu__games-list">
          { items?.length > 0 ? items?.map(game => <CartItem key={game.title} price={game.price} title={game.title} id={game.id}/>) : "Cart is empty" }
        </div>
        {items?.length > 0 ? (
            <div className="cart-menu__arrange">
              <div className="cart-menu__total-price">
                <span>Total:</span>
                <span>{totalPrice} UAH</span>
              </div>
              <Button type="primary" size="m" onClick={onClick}>Place an order</Button>
            </div>)
          : null}
      </div>
  )
};