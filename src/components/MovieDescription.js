import React from "react";
import { useSelector } from "react-redux";

const MovieDescription = () => {
  const selector = useSelector(
    (store) => store.idSelector.presentMovieDescription
  );
  return (
    <div className="mt-10 p-4">
      <h1 className="font-bold text-3xl">Overview</h1>
      <div className="relative">
        <img
          alt={selector?.original_title}
          src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${selector?.backdrop_path}`}
        />
        <div className="bg-description-gradient h-[100%] w-full absolute top-0 opacity-70"></div>
        <div className="flex gap-20 absolute top-20 left-10 rounded-lg">
          <div className="[w-20%] rounded-lg">
            <img
              className="rounded-lg"
              src={`https://media.themoviedb.org/t/p/w300_and_h450_multi_faces/${selector?.poster_path}`}
              alt={selector?.original_title}
            />
          </div>
          <div className="flex flex-col gap-4 text-white font-bold w-[70%]">
            <h1 className="text-4xl">{selector?.original_title}</h1>
            <h1 className="text-xl">Released On - {selector?.release_date}</h1>
            <div>
              <h1 className="text-2xl">Overview</h1>
              <p className="line-clamp-4 w-[80%] text-gray-300">
                {selector?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
