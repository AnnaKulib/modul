import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player/playerSlice";
import historyReducer from "../features/player/historyGameSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    history: historyReducer,
  },
});
