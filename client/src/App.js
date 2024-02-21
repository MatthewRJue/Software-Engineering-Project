import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import MovieList from "./Components/MovieList"
import Searchbar from './Components/Searchbar';
import ShowtimeSelect from './Components/ShowtimeSelect';
import SeatSelect from './Components/SeatSelect';
import TicketSelect from './Components/TicketSelect';
import Summary from './Components/Summary';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const movies = [
  {
    name: 'Oppenheimer',
    genre: 'Thriller/Action',
    rating: 'R',
    mpaarating: 'MPAA-US R',
    imageUrl:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlbnvo6cBTWi-aLAHChxPCNfCEDDqPWEejYpDvlA3ctbAmOJfVMCmflmEktyLC5wK69EGA',
    runtime: '180 Minutes',
    review: '9/10',
    director: 'Christopher Nolan',
    producer: 'Christopher Nolan',
    synopsis: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.',
    cast: 'Cillian Murphy, Robert Downey Jr., Florence Pugh, Emily Blunt',
    category: 'Currently Showing',
    embedId: 'uYPbbksJxIg',
  },
  {
    name: 'Past Lives',
    genre: 'Romance/Drama',
    rating: 'PG-13',
    mpaarating: 'MPAA-US PG-13',
    imageUrl:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVJSj4a-fYEBTJPV-ns5UszYf--tyTJU3nP8qkgLeJzOi8kWCYbQzYKEzEbbjWjiaJBuvW9Q',
    runtime: '96 Minutes',
    review: '8.5/10',
    director: 'Celine Song',
    producer: 'David Hinojosa',
    synopsis: 'Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Noras family emigrates from South Korea. Decades later, they are reunited for one fateful week as they confront destiny, love and the choices that make a life.',
    cast: 'Greta Lee, Teo Yoo, John Magaro, Isaac Cole',
    category: 'Currently Showing',
    embedId: 'kA244xewjcI',
  },
  {
    name: 'Bob Marley: One Love',
    genre: 'Musical/Drama',
    rating: 'PG-13',
    mpaarating: 'MPAA-US PG-13',
    imageUrl:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKn3j5_v44K-TyRdu2pXk6eRK3IHPo1YpdHr2s42eytCS7a7rO',
    runtime: '107 Minutes',
    review: '6.6/10',
    director: 'Reinaldo Marcus Green',
    producer: 'Ziggy Marley',
    synopsis: 'The story of how reggae icon Bob Marley overcame adversity, and the journey behind his revolutionary music.',
    cast: 'Kingsley Ben-Adir, Lashana Lynch, James Norton, Tosin Cole',
    category: 'Coming Soon',
    embedId: 'ajw425Kuvtw',
  },
]

function App() {

  const [categoryFilter, setCategoryFilter] = useState("All")
  const [searchFilter, setSearchFilter] = useState("")
  const [displayedMovies, setDisplayedMovies] = useState(movies)

  const filterMovies = (currentSearchFilter, currentCategoryFilter) => {
    var tempList = []
    for(let i = 0; i < movies.length; i++){
      var partOfMovieTitle = movies[i].name.toLowerCase().substring(0, currentSearchFilter.length)
      if((movies[i].category === currentCategoryFilter || currentCategoryFilter === "All") && partOfMovieTitle === currentSearchFilter.toLowerCase()){
        tempList.push(movies[i])
      }
    }
    return tempList
  }

  const handleCategoryChange = (category) => {
    setCategoryFilter(category)
    setDisplayedMovies(filterMovies(searchFilter, category))
  }

  const handleSearchChange = (search) => {
    setSearchFilter(search)
    setDisplayedMovies(filterMovies(search, categoryFilter))
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Searchbar setCategoryFilter={handleCategoryChange} setSearchFilter={handleSearchChange}/>
            <MovieList movies={displayedMovies}/>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-showtime" element={<ShowtimeSelect />}/>
        <Route path="/select-seats" element={<SeatSelect />}/>
        <Route path="/select-tickets" element={<TicketSelect />}/>
        <Route path="/summary" element={<Summary />}/>
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
