import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    showCastModal: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    toggleCastModal: (state) => {
      state.showCastModal = !state.showCastModal;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult, toggleCastModal } =
  gptSlice.actions;
export default gptSlice.reducer;
