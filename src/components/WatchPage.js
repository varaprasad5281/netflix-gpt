import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllMoviesStore } from "../utils/allMovieSlice";
import VideoBackground from "./VideoBackground";
import MovieCastDetails from "./MovieCastDetails";
import useMovieCast from "../hooks/useMovieCast";
import { addMovieDescription } from "../utils/idSlice";
import MovieDescription from "./MovieDescription";
import { Outlet } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();

  const idSelector = useSelector((store) => store.idSelector?.presentId);
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const ratedMovies = useSelector((store) => store.movies?.ratedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const searchMovies = useSelector((store) => store.gpt?.movieResults);

  // Combine movies into a single array
  const allMoviesArray = [
    ...(nowPlayingMovies || []),
    ...(popularMovies || []),
    ...(ratedMovies || []),
    ...(upcomingMovies || []),
    ...(searchMovies?.flat(Infinity) || []),
  ];

  // Dispatch the combined movies array after rendering
  useEffect(() => {
    dispatch(addAllMoviesStore(allMoviesArray));
  }, [
    dispatch,
    nowPlayingMovies,
    popularMovies,
    ratedMovies,
    upcomingMovies,
    searchMovies,
  ]);

  const findMovieById = allMoviesArray.find((movie) => movie.id === idSelector);
  dispatch(addMovieDescription(findMovieById));

  return (
    <div>
      <VideoBackground movieId={idSelector} />
      <MovieDescription />
      <MovieCastDetails />
      <Outlet />
    </div>
  );
};

export default WatchPage;
