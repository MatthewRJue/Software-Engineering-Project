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
import { useState, useEffect } from 'react';
import ManageMovies from './Components/ManageMovies';
import EditMovie from "./Components/EditMovie";
import PurchaseConfirmation from './Components/PurchaseConfirmation';
import RegistrationConfirmation from './Components/RegistrationConfirmation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManageUsers from './Components/ManageUsers';
import ManagePromotions from './Components/ManagePromotions';
import Profile from './Components/Profile';
import {collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './firebaseConfig'; // Add this line to prevent firebase not loading error

const prices = {
  child: "5.00",
  adult: "10.00",
  senior: "7.00",
  bookingFeePercent: "3"
}

function App() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [userStatus, setUserStatus] = useState(localStorage.getItem('userStatus') || "Web");
  const [adminTab, setAdminTab] = useState("ManageMovies");
  const [movies, setMovies] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesCollection = collection(db, 'movies');
        const moviesSnapshot = await getDocs(moviesCollection);
        const moviesData = moviesSnapshot.docs.map(doc => ({id:doc.id,...doc.data()}));
        setMovies(moviesData);
        // Set displayedMovies after movies has been initialized
        setDisplayedMovies(moviesData);
        console.log(moviesData)
      } catch (error) {
        console.error('Error fetching movies: ', error);
      }
    };


    const fetchAccounts = async () => {
      try {
        const accountsCollection = collection(db, 'accounts');
        const accountsSnapshot = await getDocs(accountsCollection);
        const accountsData = accountsSnapshot.docs.map(doc => ({id:doc.id,...doc.data()}));
        setAccounts(accountsData);
      } catch (error) {
        console.error('Error fetching accounts: ', error);
      }
    };

    const fetchPromotions = async () => {
      try {
        const promotionsCollection = collection(db, 'promotions');
        const promotionsSnapshot = await getDocs(promotionsCollection);
        const promotionsData = promotionsSnapshot.docs.map(doc => ({id:doc.id,...doc.data()}));
        setPromotions(promotionsData);
      } catch (error) {
        console.error('Error fetching promotions: ', error);
      }
    };

    fetchMovies();
    fetchAccounts();
    fetchPromotions();
  }, []);

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

  const handleLoginAttempt = async (email, password) => {
    let userFound = false;
    for(const account of accounts){
      if(account.email === email && account.password === password){
        setUserStatus(account.status);
        localStorage.setItem('userStatus', account.status); // Save to localStorage
        userFound = true;
        console.log(account.status);
        break; // Exit the loop once the user is found
      }
    }
    if (!userFound) {
      console.log("User not found or incorrect password");
      // Handle login failure
    }
  }

  const handleLogout = () => {
    setUserStatus("Web");
    localStorage.removeItem('userStatus');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar status={userStatus} updateAdminTab={handleAdminTab} onLogout={handleLogout}/>
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
