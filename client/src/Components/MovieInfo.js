import React from "react";
import TrailerPreview from "./TrailerPreview";

const MovieInfo = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) return null;

  // Destructure movie details for easy access
  const { name, genre, mpaarating, director, producer, cast, synopsis, runtime, category, review, embedId } = movie;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}> {/* Modal Overlay */}
      <div className="relative top-20 bottom-20 mx-auto p-5 border max-w-4xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}> {/* Modal Content */}
        <div className="pl-6 mt-3 text-left">
          <h3 className="text-3xl leading-6 font-medium text-gray-900">{name}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500">{genre}</p>
          {/* Additional movie details */}
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              {/* Category */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Category</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{category}</dd>
              </div>
              {/* Runtime */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Runtime</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{runtime}</dd>
              </div>
              {/* Rating */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Rating</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{mpaarating}</dd>
              </div>
              {/* Review */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Review</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{review}</dd>
              </div>
              {/* Director */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Director</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{director}</dd>
              </div>
              {/* Producer */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Producer</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{producer}</dd>
              </div>
              {/* Cast */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Director</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cast}</dd>
              </div>
              {/* Synopsis */}
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{synopsis}</dd>
              </div>
              <div className="flex justify-center mr-5">
                <TrailerPreview embedId={embedId} />
              </div>
            </dl>
          </div>
          <div className="mt-2 px-7 py-3 text-center">
            <button onClick={onClose} className="bg-indigo-600 text-white active:bg-indigo-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;