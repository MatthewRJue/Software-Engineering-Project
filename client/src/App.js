import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import MovieList from "./Components/MovieList"
import Searchbar from './Components/Searchbar';
import ShowtimeSelect from './Components/ShowtimeSelect';
import SeatSelect from './Components/SeatSelect';
import TicketSelect from './Components/TicketSelect';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

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
        <Route path="/select-seats" element={<SeatSelect />}/>
        <Route path="/select-tickets" element={<TicketSelect />}/>
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
