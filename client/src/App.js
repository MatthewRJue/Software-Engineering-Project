import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import React, {useState} from 'react';
import MovieList from "./Components/MovieList"
import Movieinfo from "./Components/MovieInfo"
import Searchbar from './Components/Searchbar';
import ShowtimeSelect from './Components/ShowtimeSelect';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(true)
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Searchbar />
            <MovieList />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-showtime" element={<ShowtimeSelect />}/>
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
