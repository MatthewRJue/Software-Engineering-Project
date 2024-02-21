// SeatMap.js

import React from 'react';
import Seat from './Seat';

const SeatMap = ({ seats, onSeatSelect }) => {
  return (
    <div className="seat-map">
      {seats.map((seat) => (
        <Seat key={seat.number} seatNumber={seat.number} onSelect={onSeatSelect} />
      ))}
    </div>
  );
};

export default SeatMap;
