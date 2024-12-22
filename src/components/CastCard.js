import React from "react";
import useMovieCast from "../hooks/useMovieCast";
import { useDispatch, useSelector } from "react-redux";
import { IMG_POSTER_URL } from "../utils/constants";
import { addCastDetails } from "../utils/idSlice";
import useCastDetails from "../hooks/useCastDetails";
import { toggleCastModal } from "../utils/gptSlice";
import CastModal from "./CastModal";

const CastCard = () => {
  useMovieCast();
  useCastDetails();
  const dispatch = useDispatch();

  const movieCastData = useSelector(
    (store) => store.movieCast?.eachMovieCast?.cast
  );

  const handleCastSelect = (id) => {
    dispatch(addCastDetails(id));
    dispatch(toggleCastModal());
  };

  if (!movieCastData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4 p-4">
      {movieCastData.map((castUser) => {
        if (!castUser.profile_path) {
          return null;
        }

        return (
          <div key={castUser.id}>
            <div
              onClick={() => handleCastSelect(castUser.id)}
              className="shadow-lg rounded-lg cursor-pointer flex flex-col justify-between"
            >
              <img
                className="rounded-t-lg"
                src={IMG_POSTER_URL + castUser.profile_path}
                alt={castUser.name}
              />
              <div className="p-4">
                <h1 className="font-bold text-sm">{castUser.name}</h1>
                <p className="break-words text-sm">{castUser.character}</p>
              </div>
            </div>
            <CastModal />
          </div>
        );
      })}
    </div>
  );
};

export default CastCard;
