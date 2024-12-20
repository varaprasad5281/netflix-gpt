import { createSlice } from "@reduxjs/toolkit";

const movieCast = createSlice({
  name: "movieCast",
  initialState: {
    eachMovieCast: null,
  },
  reducers: {
    addMovieCast: (state, action) => {
      state.eachMovieCast = action.payload;
    },
  },
});
export const { addMovieCast } = movieCast.actions;
export default movieCast.reducer;
