import React, { useRef, useState } from "react";
import { API_OPTIONS, BACKGROUND } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import axios from "axios";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectLang = useSelector((store) => store.lang.lang);
  const searchInput = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const GEMINI_API_KEY = process.env.REACT_APP_API_KEY_GEMINI;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const searchMovieTMDB = async (movieName) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (err) {
      console.error("Error fetching TMDB data:", err);
      setError("Failed to fetch movie data from TMDB.");
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    if (searchInput.current.value === "") return null;

    setLoading(true);
    setError("");

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchInput.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Pushpa-2, Don, OG, Salar, Harihara Veeramallu.";

    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                text: gptQuery,
              },
            ],
          },
        ],
      };

      const geminiResponse = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const aiResponse =
        geminiResponse?.data?.candidates[0]?.content?.parts[0]?.text;

      const moviesArray = aiResponse.split(",").map((movie) => movie.trim());
      const tmdbResults = await Promise.all(
        moviesArray.map((movie) => searchMovieTMDB(movie))
      );
      dispatch(
        addGptMovieResult({
          movieNames: moviesArray,
          movieResults: tmdbResults,
        })
      );
    } catch (err) {
      console.error("Error calling Gemini API:", err);
      setError("Failed to fetch movie recommendations.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <img
        src={BACKGROUND}
        alt="background"
        className="absolute w-full h-screen"
      />
      <form
        onSubmit={handleSearchSubmit}
        className="relative md:w-[60%] lg:w-[50%] bg-black md:flex-row flex flex-col md:gap-4 gap-4 py-4 px-4 justify-center items-center mx-auto top-40 z-50 sm:w-[90%]"
      >
        <input
          ref={searchInput}
          className="w-full md:w-9/12 px-4 py-2 border border-gray-600 rounded-md"
          type="text"
          placeholder={lang[selectLang].placeHolder}
        />
        <button
          type="submit"
          onClick={handleGptSearchClick}
          className="w-full md:w-auto px-4 py-2 rounded-md bg-red-600 text-white"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
    </div>
  );
};

export default GptSearchBar;
