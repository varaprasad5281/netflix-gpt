import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
  name: "selectId",
  initialState: {
    presentId: null,
    presentMovieDescription: null,
  },
  reducers: {
    currentId: (state, action) => {
      state.presentId = action.payload;
    },
    addMovieDescription: (state, action) => {
      state.presentMovieDescription = action.payload;
    },
  },
});
export const { currentId, addMovieDescription } = idSlice.actions;
export default idSlice.reducer;
