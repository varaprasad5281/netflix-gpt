import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="pl-12 bg-black ">
        <div className="-mt-48 z-100 relative">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Top Rated" movies={movies.ratedMovies} />
          <MovieList title="Upcoming" movies={movies.upcomingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
