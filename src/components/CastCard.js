import React from "react";
import useMovieCast from "../hooks/useMovieCast";
import { useSelector } from "react-redux";
import { IMG_POSTER_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const CastCard = () => {
  useMovieCast();

  const movieCastData = useSelector(
    (store) => store.movieCast?.eachMovieCast?.cast
  );
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4 p-4">
      {movieCastData &&
        movieCastData.map((castUser) => {
          return (
            <Link to="/watchpage/cast-details">
              <div key={castUser.id} className="shadow-lg rounded-lg">
                <img
                  className="w-40 h-60 rounded-t-lg"
                  src={IMG_POSTER_URL + castUser.profile_path}
                  alt={castUser.name}
                />
                <div className="p-4">
                  <h1 className="font-bold">{castUser.name}</h1>
                  <p className="break-words">{castUser.character}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default CastCard;
