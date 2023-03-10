import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    currentGame: null,
  },
  reducers: {
    showGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { showGame } = gameSlice.actions;
export default gameSlice.reducer;
