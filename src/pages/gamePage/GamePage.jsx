import React from "react";
import { useSelector } from "react-redux";
import { GameBuy } from "../../components/gameBuy/GameBuy";
import { GameCover } from "../../components/gameCover/GameCover";
import { GameGenre } from "../../components/gameGenre/GameGenre";
import "./gamePage.css";

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  if (!game) return null;

  return (
    <div className="game-page">
      <h1 className="game-page-title">{game.title}</h1>
      <div className="game-page-content">
        <div className="game-page-left">
          <iframe
            src={game.video}
            title={"Youtube video"}
            width="90%"
            height="400px"
            frameBorder="0"
          ></iframe>
        </div>

        <div className="game-page-right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p>Популярные метки:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="game-page-buy">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
