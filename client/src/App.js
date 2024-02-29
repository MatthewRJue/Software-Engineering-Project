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
import Checkout from './Components/Checkout';
import PageNotFound from './Components/PageNotFound';
import { useState } from 'react';
import ManageMovies from './Components/ManageMovies';
import EditMovie from "./Components/EditMovie";
import PurchaseConfirmation from './Components/PurchaseConfirmation';
import RegistrationConfirmation from './Components/RegistrationConfirmation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManageUsers from './Components/ManageUsers';
import ManagePromotions from './Components/ManagePromotions';
import Profile from './Components/Profile';

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

const accounts = [
  {
    email: "admin@uga.edu",
    password: "godawgs",
    status: "Admin",
    name: "John Doe",
    phone: "7451238964",
    suspensionStatus: "Active"
  },
  {
    email: "student@uga.edu",
    password: "godawgs",
    status: "User",
    name: "User 123",
    phone: "1234567899",
    suspensionStatus: "Active"
  },
  {
    email: "anotherAdmin@uga.edu",
    password: "godawgs",
    status: "Admin",
    name: "Dr. Professor",
    phone: "3216541234",
    suspensionStatus: "Active"
  },
  {
    email: "student@uga.edu",
    password: "godawgs",
    status: "User",
    name: "Student 2",
    phone: "1112223334",
    suspensionStatus: "Suspended"
  }
]

const promotions = [
  {
    name: "Half Off Any Movie",
    id: "4837562",
    percent: "50",
    expiration: "03/12/2024",
    validMovie: "All"
  },
  {
    name: "25% Off Movie",
    id: "8473629",
    percent: "25",
    expiration: "03/16/2024",
    validMovie: "One Love, Past Lives"
  },
  {
    name: "Past Lives Flash Sale",
    id: "8478897",
    percent: "70",
    expiration: "03/05/2024",
    validMovie: "Past Lives"
  }
]

const prices = {
  child: "5.00",
  adult: "10.00",
  senior: "7.00",
  bookingFeePercent: "3"
}

function App() {

  const [categoryFilter, setCategoryFilter] = useState("All")
  const [searchFilter, setSearchFilter] = useState("")

  const [displayedMovies, setDisplayedMovies] = useState(movies)
  const [userStatus, setUserStatus] = useState("User")
  const [adminTab, setAdminTab] = useState("ManageMovies")

  const filterMovies = (currentSearchFilter, currentCategoryFilter) => {
    var tempList = movies.filter(movie => {
      const searchLower = currentSearchFilter.toLowerCase();
      const matchesTitle = movie.name.toLowerCase().includes(searchLower);
      const matchesGenre = movie.genre.toLowerCase().includes(searchLower);
      const matchesCategory = currentCategoryFilter === "All" || movie.category === currentCategoryFilter;
      return (matchesTitle || matchesGenre) && matchesCategory;
    });
    return tempList;
  }

  const handleSearchChange = (search) => {
    setSearchFilter(search);
    setDisplayedMovies(filterMovies(search, categoryFilter));
  }

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
    setDisplayedMovies(filterMovies(searchFilter, category));
  }

  const handleAdminTab = (tab) => {
    setAdminTab(tab)
  }

  const handleLoginAttempt = (email, password) => {
    setUserStatus("Web")
    for(const account in accounts){
      if(account.email === email && account.password === password){
        setUserStatus(account.status)
        console.log(account.status)
      }
    }
  }

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar status={userStatus} updateAdminTab={handleAdminTab}/>
            <Searchbar setSearchFilter={handleSearchChange} setCategoryFilter={handleCategoryChange}/>
            {userStatus === "Admin" && adminTab === "ManageMovies" && <ManageMovies movieList={displayedMovies}/>}
            {userStatus === "Admin" && adminTab === "ManageUsers" && <ManageUsers userList={accounts} />}
            {userStatus === "Admin" && adminTab === "ManagePromotions" && <ManagePromotions prices={prices} promoList={promotions}/>}
            {userStatus === "Web" && <MovieList movies={displayedMovies}/>}
            {userStatus === "User" && <MovieList movies={displayedMovies} status={"User"}/>}
          </>
        } />
        <Route path="/login" element={<Login handleLogin={handleLoginAttempt}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/registration-confirmation" element={<RegistrationConfirmation />} />
        <Route path="/select-showtime" element={<ShowtimeSelect />}/>
        <Route path="/select-seats" element={<SeatSelect />}/>
        <Route path="/select-tickets" element={<TicketSelect />}/>
        <Route path="/summary" element={<Summary />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/purchase-confirmation" element={<PurchaseConfirmation />} />
        <Route path="/profile" element={<Profile />} />
        {/* Admin Routes */}
        <Route path="/edit-movie" element={<EditMovie />}/>
        {/* Add other routes here */}
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
