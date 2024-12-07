import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRatedMovies } from "../utils/movieSlice";
const useRatedMovies = () => {
  const dispatch = useDispatch();

  const getRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addRatedMovies(json.results));
  };

  useEffect(() => {
    getRatedMovies();
  }, []);
};

export default useRatedMovies;
