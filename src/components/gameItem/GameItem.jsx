import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GameBuy } from "../gameBuy/GameBuy";
import { GameCover } from "../gameCover/GameCover";
import { GameGenre } from "../gameGenre/GameGenre";
import { showGame } from "../../redux/game/reducer";
import "./gameItem.css";

const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showGame(game));
    navigate(`/app/${game.title}`);
  };

  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="game-item-details">
        <span className="game-item-title">{game.title}</span>
        <div className="game-item-genre">
          {game.genres.map((genre) => (
            <GameGenre key={genre} genre={genre} />
          ))}
        </div>
        <div className="game-item-buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
