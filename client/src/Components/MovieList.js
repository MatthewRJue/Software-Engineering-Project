const movies = [
    {
      name: 'Oppenheimer',
      genre: 'Thriller/Action',
      rating: 'R',
      imageUrl:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlbnvo6cBTWi-aLAHChxPCNfCEDDqPWEejYpDvlA3ctbAmOJfVMCmflmEktyLC5wK69EGA',
      runtime: '180 Minutes',
      director: 'Christopher Nolan',
    },
    {
      name: 'Past Lives',
      genre: 'Romance/Drama',
      rating: 'PG-13',
      imageUrl:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVJSj4a-fYEBTJPV-ns5UszYf--tyTJU3nP8qkgLeJzOi8kWCYbQzYKEzEbbjWjiaJBuvW9Q',
      runtime: '96 Minutes',
      director: 'Celine Song',
    },
  ]
  
  export default function MovieList() {
    return (
      <ul className="divide-y divide-gray-100 p-20">
        {movies.map((movie) => (
          <li key={movie.genre} className="flex justify-between gap-x-6 py-5 bg-white shadow-lg rounded-xl p-8 space-y-8 mb-6">
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
              <button className="px-4 py-2 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:text-indigo-400 hover:border-indigo-400">
                Details
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
                Book Now
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  }