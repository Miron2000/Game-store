import React from "react";
import {useSelector} from "react-redux";

import "./game-page.css";
import { GameCover } from "../../components/game-cover"
import { GameGenre } from "../../components/game-genre";
import { GameBuy } from "../../components/game-buy";

export const GamePage = () => {
  const game = useSelector(state => state.game.currentGames);
  if(!game) return null;

  return (
      <div className="game-page">
          <h1 className="game-page__title">{game.title}</h1>
        <div className="game-page__content">
          <div className="game-page__left">
            <iframe
                width="90%"
                height="400px"
                src={game.video}
                frameBorder="0"
                title="YouTube video Player"/>
          </div>
          <div className="game-page__right">
            <GameCover image={game.image} />
            <p className="game-page__title">{game.description}</p>
            <p className="secondary-text">Popular tags for this product:</p>
            {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
            <div className="game-page__buy-game">
              <GameBuy game={game} />
            </div>
          </div>
        </div>
      </div>
  )
};