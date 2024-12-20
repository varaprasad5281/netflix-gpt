import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
  name: "selectId",
  initialState: {
    presentId: null,
    presentMovieDescription: null,
    castData: null,
    presentCastDescription: null,
  },
  reducers: {
    currentId: (state, action) => {
      state.presentId = action.payload;
    },
    addMovieDescription: (state, action) => {
      state.presentMovieDescription = action.payload;
    },
    addCastDetails: (state, action) => {
      state.castData = action.payload;
    },
    addCastDescription: (state, action) => {
      state.presentCastDescription = action.payload;
    },
  },
});
export const {
  currentId,
  addMovieDescription,
  addCastDetails,
  addCastDescription,
} = idSlice.actions;
export default idSlice.reducer;
