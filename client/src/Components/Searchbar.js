import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import {useState} from "react";

export default function Searchbar({setCategoryFilter, setSearchFilter}) {
    
  const [searchInput, setSearchInput] = useState("")
  const handleSearch = () => {
    setSearchFilter(searchInput)
  }

    return (
      <div className="flex justify-center">
        <div className="flex relative mt-2 rounded-md w-full max-w-xl">
          {/* Magnifying Glass Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="movie"
            id="movie"
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search Movies by Name, Genre, etc..."
            onChange={e => setSearchInput(e.target.value)}
          />
          <span className="sm:ml-3">
            <Filter setFilter={setCategoryFilter}/>
          </span>
          <span className="sm:ml-3">
            <Link to="/" onClick={handleSearch} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Search
            </Link>
          </span>
        </div>
      </div>
    )
}