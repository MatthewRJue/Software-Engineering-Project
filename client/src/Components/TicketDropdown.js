// TicketDropdown.js

import React, { useState, useEffect } from 'react';

const TicketDropdown = ({ maxTickets, onSelect }) => {
  const [selectedTickets, setSelectedTickets] = useState(0);

  useEffect(() => {
    // Ensure that the selected tickets are within the valid range
    if (selectedTickets > maxTickets) {
      setSelectedTickets(maxTickets);
      onSelect(maxTickets);
    }
  }, [maxTickets, selectedTickets, onSelect]);

  const handleTicketChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setSelectedTickets(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="ticketDropdown">Select Tickets: </label>
      <select id="ticketDropdown" value={selectedTickets} onChange={handleTicketChange}>
        {Array.from({ length: maxTickets + 1 }, (_, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TicketDropdown;
