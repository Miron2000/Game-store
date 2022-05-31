import React from "react";

import "./home-page.css";
import { GameItem } from "../../components/game-item";
import { GAMES } from "../../GAMES";

export const HomePage = () => {
  return (
      <div className="home-page">
        { GAMES?.map(game => <GameItem key={game.id} game={game} />)}
      </div>
  )
};