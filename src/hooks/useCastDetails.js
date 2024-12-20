import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCastDescription } from "../utils/idSlice";

const useCastDetails = () => {
  const movie_id = useSelector((store) => store.idSelector.castData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state
  const dispatch = useDispatch();

  const getMovieCastDetails = async () => {
    if (
      !movie_id ||
      (typeof movie_id !== "string" && typeof movie_id !== "number")
    ) {
      setError("Invalid movie ID");
      return;
    }

    setLoading(true); // Start loading before making the API call

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${movie_id}`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const json = await response.json();
      dispatch(addCastDescription(json));
    } catch (err) {
      console.error("Failed to fetch cast data:", err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false); // Set loading to false when request is done
    }
  };

  useEffect(() => {
    getMovieCastDetails();
  }, [movie_id, dispatch]);

  return { error, loading };
};

export default useCastDetails;
