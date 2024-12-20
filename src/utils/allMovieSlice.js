import { createSlice } from "@reduxjs/toolkit";

const allMovies = createSlice({
  name: "allMovies",
  initialState: {
    addAllMovies: null,
  },
  reducers: {
    addAllMoviesStore: (state, action) => {
      state.addAllMovies = action.payload;
    },
  },
});
export const { addAllMoviesStore } = allMovies.actions;
export default allMovies.reducer;
