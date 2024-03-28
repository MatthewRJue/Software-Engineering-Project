import React, { useState } from "react";
import MovieInfo from "./MovieInfo";
import { useNavigate } from 'react-router-dom';



export default function MovieList({movies, status}) {
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null); // Step 2
  const navigate = useNavigate();

  console.log(movies)
  console.log("working")

  const handleBookNowClick = (movie) => { // Updated to include movie parameter
    const isLoggedIn = true;
    if (isLoggedIn) {
      navigate('/select-showtime', { state: { movie } }); // Updated to pass movie data
    } else {
      navigate('/login');
    }
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
        {movies.map((movie) => (
          <li key={movie.name} className="flex justify-between gap-x-6 py-5 bg-white shadow-lg rounded-xl p-8 space-y-8 mb-6">
            <div className="flex min-w-0 gap-x-4">
              <img className="w-40 flex-none bg-gray-50" src={movie.imageURL} alt="" />
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
              {movie.category === "Currently Showing" && status === "User" && 
              <button onClick={() => handleBookNowClick(movie)} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
                Book Now
              </button>}
            </div>
          </li>
        ))}
      </ul>
      {selectedMovie && <MovieInfo isOpen={isInfoOpen} onClose={handleCloseInfo} movie={selectedMovie} />}
    </div>
  );
}
