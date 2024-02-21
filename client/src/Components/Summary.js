import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import Navbar from "./Navbar"

export default function Summary() {
    const location = useLocation();
    const movie = location.state?.movie;
    const selectedShowtime = location.state?.selectedShowtime;
    const navigate = useNavigate();
    const { selectedOptions = {} } = location.state || {};

    console.log('Selected Options:', selectedOptions); // Debugging line

    // Ticket prices
    const ticketPrices = {
        Adult: 10,
        Senior: 7,
        Child: 5
    };

    // Convert selectedOptions to a format that can be easily decremented and updated
    const initialTicketCounts = Object.values(selectedOptions).reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    console.log('Initial Ticket Counts:', initialTicketCounts); // Debugging line

    const [ticketCounts, setTicketCounts] = useState(initialTicketCounts);

    const handleDecrement = (type) => {
        setTicketCounts((prevCounts) => {
            const updatedCounts = { ...prevCounts };
            if (updatedCounts[type] > 1) {
                updatedCounts[type] -= 1;
            } else {
                delete updatedCounts[type];
            }
            return updatedCounts;
        });
    };

    // Calculate the total number of tickets
    const totalTickets = Object.values(ticketCounts).reduce((total, count) => total + count, 0);

    // Calculate the total price
    const totalPrice = Object.entries(ticketCounts).reduce((total, [type, count]) => {
        return total + (ticketPrices[type] * count);
    }, 0);

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-200 mt-6">
                <div className="w-full max-w-4xl p-8 space-y-8 bg-white shadow-lg rounded-xl">
                    <div className="flex min-h-full flex-1 flex-col justify-center">
                        <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                            Order Summary
                        </h2>
                        <h2 className="text-center text-lg font-semibold leading-9 tracking-tight text-gray-900 mt-4">
                            {totalTickets} x Tickets to {movie.name}
                        </h2>
                        <p className="text-center text-m text-gray-700 mt-2">
                            {selectedShowtime.name}
                        </p>

                        {/* Ticket Types List */}
                        <div className="mt-4">
                            <ul className="divide-y divide-gray-100 flex justify-center flex-col items-center mt-10">
                                {Object.entries(ticketCounts).map(([type, count]) => (
                                    <div className="grid grid-cols-3 gap-x-4 items-center py-2 text-m w-7/12 text-center" key={type}>
                                        <li className="flex w-7/12 gap-x-6 py-8">
                                            <span className="text-md font-md">
                                                {type} Ticket(s)
                                            </span>
                                        </li>
                                        <span>
                                            ${count * ticketPrices[type]}
                                        </span>
                                        <button
                                            onClick={() => handleDecrement(type)}
                                            className="ml-24 px-2.5 py-1 h-8 text-sm font-semibold text-white border rounded bg-red-500 hover:bg-red-400 flex flex-row gap-x-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5 mt-0.25">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                            {count}
                                        </button>
                                    </div>
                                ))}
                                <li className="grid grid-cols-2 gap-x-96 items-center py-4 text-md font-semibold">
                                    <span className="text-md font-semibold">
                                        Total
                                    </span>
                                    <span className="text-md font-semibold">
                                        ${totalPrice}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-row mt-16 space-x-4 justify-center">
                            <button 
                                onClick={() => navigate(-4)}
                                className="px-20 py-2 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:text-indigo-400 hover:border-indigo-400"
                            >
                            Cancel
                            </button>
                            <button
                                className="px-20 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                                // onClick={() => handleNextClick(movie)}
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