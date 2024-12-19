import React from "react";
import { IMG_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterUrl, id }) => {
  if (posterUrl === null) return null;
  const handleMovieSelecct = (id) => {
    console.log(id);
  };
  return (
    <div
      className="w-48 flex mr-4 cursor-pointer"
      onClick={() => handleMovieSelecct(id)}
    >
      <img src={IMG_POSTER_URL + posterUrl} alt="movie-banner" />
    </div>
  );
};

export default MovieCard;
