import React from "react";
import { IMG_POSTER_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentId } from "../utils/idSlice";

const MovieCard = ({ posterUrl, id }) => {
  const dispatch = useDispatch();
  if (!posterUrl) return null;
  const handleMovieSelecct = (id) => {
    dispatch(currentId(id));
  };
  return (
    <Link
      to="watchpage"
      className="w-48 flex mr-4 cursor-pointer"
      onClick={() => handleMovieSelecct(id)}
    >
      <img src={IMG_POSTER_URL + posterUrl} alt="movie-banner" />
    </Link>
  );
};

export default MovieCard;
