import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    currentGames: null,
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGames = action.payload
    }
  }
});

export const { setCurrentGame } = gameSlice.actions;
export default gameSlice.reducer;