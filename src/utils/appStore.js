import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import allMovieReducer from "./allMovieSlice";
import idReducer from "./idSlice";
import movieCastReducer from "./movieCast";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    lang: configReducer,
    allMovies: allMovieReducer,
    idSelector: idReducer,
    movieCast: movieCastReducer,
  },
});
export default appStore;
