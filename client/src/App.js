import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import React from 'react';
import MovieList from "./Components/MovieList"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update this line

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <><Navbar />
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
