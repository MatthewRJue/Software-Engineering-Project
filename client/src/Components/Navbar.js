import { MapPinIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between p-10">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          A1 Cinema
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            University of Georgia
          </div>
        </div>
      </div>
      <div className="mt-0 flex lg:ml-4 lg:mt-0">
        <span className="sm:ml-3">
          <Link to="/login" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Login
          </Link>
        </span>
      </div>
    </div>
  )
}

