import React from "react";
import { IMG_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterUrl }) => {
  return (
    <div className="w-48 flex mr-4 cursor-pointer">
      <img src={IMG_POSTER_URL + posterUrl} alt="movie-banner" />
    </div>
  );
};

export default MovieCard;
