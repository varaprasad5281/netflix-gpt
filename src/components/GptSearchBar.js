import React from "react";
import { BACKGROUND } from "../utils/constants";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const selectLang = useSelector((store) => store.lang.lang);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative">
      <div>
        <img src={BACKGROUND} alt="background-image" className="absolute" />
      </div>
      <form
        onSubmit={handleSearchSubmit}
        className="w-1/2 bg-black flex gap-4 py-4 justify-center items-center absolute top-40 left-[22%]  z-50"
      >
        <input
          className="px-4 py-2  border border-gray-600 rounded-md w-9/12"
          type="text"
          placeholder={lang[selectLang].placeHolder}
          onChange={(e) => e.target.value}
        />
        <button
          type="submit"
          className="w-2/12 py-2 px-4 rounded-md bg-red-600 text-white h-10 items-center text-center"
        >
          {lang[selectLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
