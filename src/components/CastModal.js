import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCastModal } from "../utils/gptSlice";
import { IMG_POSTER_URL } from "../utils/constants";

const CastModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((store) => store.gpt.showCastModal);
  const castDetailsOverall = useSelector(
    (store) => store.idSelector.presentCastDescription
  );

  if (!showModal || !castDetailsOverall) {
    return null;
  }

  const closeModal = () => {
    dispatch(toggleCastModal());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-5xl relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-xl text-gray-600"
        >
          ×
        </button>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-80 rounded-lg shrink-0">
            <img
              className="rounded-lg h-48 sm:h-auto object-cover"
              src={IMG_POSTER_URL + castDetailsOverall.profile_path}
              alt={castDetailsOverall.name}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold mb-4">
              {castDetailsOverall.name}
            </h1>
            <p className="text-gray-700 line-clamp-4">
              {castDetailsOverall.biography}
            </p>
            <p className="text-gray-700">{castDetailsOverall.place_of_birth}</p>
            <p className="text-gray-700">
              Birth Day:{" "}
              {castDetailsOverall.birthday !== null
                ? castDetailsOverall.birthday
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastModal;
