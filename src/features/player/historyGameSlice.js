import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
};

export const historyGameSlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addGame: (state, action) => {
      const gameId = action.payload.id;
      if (!state.games.find((g) => g.id === gameId)) {
        state.games.push({
          id: gameId,
          balanceChange: 0,
        });
      }
    },
    updateBalanceChange: (state, action) => {
      const { gameId, balanceChange } = action.payload;
      const game = state.games.find((g) => g.id === gameId);
      if (game) {
        game.balanceChange += balanceChange;
      }
    },
    clearGameHistory: (state) => {
      state.games = initialState.games;
    },
  },
});

export const { addGame, clearGameHistory, updateBalanceChange } =
  historyGameSlice.actions;

export const getHistory = (state) => state.history;

export default historyGameSlice.reducer;
