import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function TicketSelect() {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie, selectedShowtime, selectedSeats = [] } = location.state || {};

    // Initialize selectedOptions with a default ticket type for each seat
    const defaultSelectedOptions = selectedSeats.reduce((acc, seatId) => {
        acc[seatId] = 'Adult'; // Default ticket type
        return acc;
    }, {});

    const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions);

    useEffect(() => {
        // Update the state if selectedSeats changes
        setSelectedOptions(defaultSelectedOptions);
    }, [selectedSeats]);

    const handleSelectChange = (seatId, selectedOption) => {
        setSelectedOptions(prevOptions => ({
            ...prevOptions,
            [seatId]: selectedOption,
        }));
    };

    const handleNextClick = () => {
        navigate('/summary', { state: { movie, selectedShowtime, selectedSeats, selectedOptions } });
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-200 mt-6">
                <div className="w-full max-w-4xl p-8 space-y-8 bg-white shadow-lg rounded-xl">
                    <div className="flex min-h-full flex-1 flex-col justify-center">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Select Your Tickets for {movie.name}
                        </h2>
                        <p className="text-center text-m text-gray-700 mt-2">
                            {selectedShowtime.name}
                        </p>

                        <ul className="divide-y divide-gray-100 flex justify-center flex-col items-center mt-10">
                            {selectedSeats && selectedSeats.map((seatId, index) => (
                            <li 
                                key={index}
                                className="flex w-7/12 gap-x-6 py-8"
                            >
                                <div className="flex flex-row gap-x-96">
                                    <span className="text-sm font-semibold leading-6 text-gray-900">
                                        Seat {seatId}
                                    </span>
                                    <select
                                        value={selectedOptions[seatId] || 'Select Ticket'} // Default to 'Adult' if no option is selected
                                        onChange={(e) => handleSelectChange(seatId, e.target.value)}
                                        className="rounded-md border-indigo-600 shadow-sm text-sm text-indigo-600 h-10"
                                    >
                                        <option value="Adult">Adult</option>
                                        <option value="Child">Child</option>
                                        <option value="Senior">Senior</option>
                                    </select>
                                </div>
                            </li>
                            ))}
                        </ul>

                        <div className="flex flex-row mt-16 space-x-4 justify-center">
                            <button 
                                onClick={() => navigate(-3)}
                                className="px-20 py-2 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:text-indigo-400 hover:border-indigo-400"
                            >
                            Cancel
                            </button>
                            <button 
                                className="px-20 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                                onClick={() => handleNextClick(movie)}
                            >
                            Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}