import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movieBanner) => {
            return (
              <MovieCard
                key={movieBanner.id}
                posterUrl={movieBanner.poster_path}
                id={movieBanner.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
