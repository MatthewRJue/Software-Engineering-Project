import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import React, {useState} from 'react';
import MovieList from "./Components/MovieList"
import Movieinfo from "./Components/MovieInfo"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update this line



function App() {

  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <><Navbar />
          <Movieinfo isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
          <MovieList />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
