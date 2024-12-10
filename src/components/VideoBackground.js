import React from "react";
import useMovieTrailer from "../hooks/useMovieTraialer";
import { useSelector } from "react-redux";
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trialerId = useSelector((store) => store.movies?.trailerVideo?.key);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trialerId +
          "?autoplay=1&loop=1&mute=1&rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
