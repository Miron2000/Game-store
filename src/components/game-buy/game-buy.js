import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./game-buy.css";
import { Button } from "../button";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  const isItemInCart = items?.some(item => item.id === game.id);

  const handleClick = (event) => {
    event.stopPropagation();
    if(isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
      <div className="game-buy">
          <span className="game-buy__price">{game.price} UAH</span>
          <Button
              type={isItemInCart ? "secondary" : "primary"}
              onClick={handleClick}
          >
            {isItemInCart ? "Remove from cart" : "To cart"}
          </Button>
      </div>
  )
};