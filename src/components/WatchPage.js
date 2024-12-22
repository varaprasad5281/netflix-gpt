import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllMoviesStore } from "../utils/allMovieSlice";
import VideoBackground from "./VideoBackground";
import MovieCastDetails from "./MovieCastDetails";
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

  // Find the selected movie and dispatch it as the description
  useEffect(() => {
    const findMovieById = allMoviesArray.find(
      (movie) => movie.id === idSelector
    );
    if (findMovieById) {
      dispatch(addMovieDescription(findMovieById));
    }
  }, [dispatch, idSelector, allMoviesArray]);

  return (
    <div className="mt-28 md:mt-0 bg-black text-white">
      <VideoBackground movieId={idSelector} />
      <MovieDescription />
      <MovieCastDetails />
      <Outlet />
    </div>
  );
};

export default WatchPage;
