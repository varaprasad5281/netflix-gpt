import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const nowMovieTrailer = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    if (!movieId) {
      setError("Movie ID is required.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const json = await response.json();
      const trailerData = json.results?.filter(
        (video) => video.type === "Trailer"
      );
      const trailer =
        trailerData && trailerData.length > 0
          ? trailerData[0]
          : json.results?.[0] || null;
      dispatch(addMovieTrailer(trailer));
    } catch (err) {
      console.error("Failed to fetch movie trailer:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!nowMovieTrailer) getMovieVideos();
  }, [movieId]);

  return { loading, error };
};

export default useMovieTrailer;
