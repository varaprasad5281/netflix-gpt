import React from "react";
import Header from "./Header";
import useMovieData from "../hooks/useMovieData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Browse = () => {
  const selector = useSelector((state) => state.gpt.showGptSearch);
  const location = useLocation();

  const isWatchPage = location.pathname.startsWith("/browse/watchpage");

  // Fetch movie data
  useMovieData();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black">
      <Header />
      {isWatchPage ? (
        <Outlet />
      ) : (
        <>
          {selector ? (
            <GptSearch />
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browse;
