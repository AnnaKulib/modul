import _ from "lodash";
import gamesData from "../gameData.json";

export const getGameNameById = (gameId) => {
  const game = _.find(gamesData.games, { id: gameId });
  return game ? game.name : "";
};
