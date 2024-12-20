import React from "react";
import CastCard from "./CastCard";

const MovieCast = () => {
  return (
    <div className="mt-6 p-4">
      <h1 className="font-bold text-2xl">Top Billed Cast</h1>
      <CastCard />
    </div>
  );
};

export default MovieCast;
