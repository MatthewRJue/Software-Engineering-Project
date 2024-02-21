import React, { useState } from 'react';
import { ReactComponent as CustomSeatIcon } from './customSeatIcon.svg';

const Seat = ({ seatNumber, onSelect }) => {
  const [selected, setSelected] = useState(false);

  const handleSeatClick = () => {
    setSelected(!selected);
    onSelect(seatNumber, !selected);
  };

  return (
    <div
      className={`seat ${selected ? 'selected' : ''}`}
      onClick={handleSeatClick}
    >
      <CustomSeatIcon className="w-6 h-6 fill-current text-white" />
      {seatNumber}
    </div>
  );
};

export default Seat;
