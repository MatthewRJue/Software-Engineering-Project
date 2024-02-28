import React, { useState } from "react";
import EditMovie from "./EditMovie";
import { useNavigate } from 'react-router-dom';
import MovieInfo from "./MovieInfo";


export default function ManageMovies({movieList, status}) {
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null); // Step 2
  const [editOpen, setEditOpen] = useState(false);

  const handleEditMovie = (movie) => { // Updated to include movie parameter
    setSelectedMovie(movie)
    setEditOpen(true)
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
    setSelectedMovie(null); // Reset selected movie on close
  };

  const handleOpenInfo = (movie) => { // Step 3
    setSelectedMovie(movie);
    setInfoOpen(true);
  };
  const handleCloseInfo = () => {
    setInfoOpen(false);
    setSelectedMovie(null); // Reset selected movie on close
  };

  return (
    <div>
      <ul className="divide-y divide-gray-100 p-20">
        {movieList.map((movie) => (
          <li key={movie.name} className="flex justify-between gap-x-6 py-5 bg-white shadow-lg rounded-xl p-8 space-y-8 mb-6">
            <div className="flex min-w-0 gap-x-4">
              <img className="w-40 flex-none bg-gray-50" src={movie.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-3xl font-semibold leading-6 text-gray-900">{movie.name}</p>
                <p className="mt-4 truncate text-sm leading-5 text-gray-500">{movie.genre}</p>
                <p className="mt-2 truncate text-sm leading-5 text-gray-500">Directed By {movie.director}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{movie.rating}</p>
              <p className="text-sm leading-6 text-gray-900">{movie.runtime}</p>
            </div>
            <div className="mt-4 space-x-4">
              <button onClick={() => handleOpenInfo(movie)}  className="px-4 py-2 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:text-indigo-400 hover:border-indigo-400">
                Details
              </button>
              <button onClick={() => handleEditMovie(movie)} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
                Edit Movie
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedMovie && <MovieInfo isOpen={isInfoOpen} onClose={handleCloseInfo} movie={selectedMovie} />}
      {selectedMovie && <EditMovie isOpen={editOpen} onClose={handleCloseEdit} movieToEdit={selectedMovie} />}
    </div>
  );
}
