import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieCast } from "../utils/movieCast";

const useMovieCast = () => {
  const movie_id = useSelector((store) => store.idSelector.presentId);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const getMovieCast = async () => {
    if (!movie_id) return; // Avoid making the API call if movie_id is not available
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const json = await response.json();
      dispatch(addMovieCast(json));
    } catch (err) {
      console.error("Failed to fetch cast data:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    getMovieCast();
  }, [movie_id, dispatch]);

  return { error }; // Return error to the consuming component
};

export default useMovieCast;
