import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  deposit: 0,
  balance: 0,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      return action.payload;
    },
    updateBalance: (state, action) => {
      const amount = action.payload;
      if (amount != null) {
        state.balance = state.balance + amount;
      }
    },
    clearPlayerInfo: (state) => {
      state.name = "";
      state.deposit = 0;
      state.balance = 0;
      state.logo = "";
    },
  },
});

export const { setPlayer, updateBalance, clearPlayerInfo } =
  playerSlice.actions;

export const getPlayer = (state) => state.player;

export default playerSlice.reducer;
