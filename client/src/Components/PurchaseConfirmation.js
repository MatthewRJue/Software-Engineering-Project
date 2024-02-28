import React from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const PurchaseConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie, selectedShowtime, ticketCounts, totalPrice } = location.state || {};

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-20 p-4">
                <div className="bg-white rounded-lg shadow p-6 max-w-md w-full">
                    <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Purchase Successful!</h2>
                    <p className="text-lg font-medium">Movie: <span className="font-normal">{movie.name}</span></p>
                    <p className="text-lg font-medium">Showtime: <span className="font-normal">{selectedShowtime.name}</span></p>
                    <div className="text-lg font-medium">Tickets:
                        <ul className="list-none pl-8">
                            {Object.entries(ticketCounts).map(([type, count]) => (
                                <li key={type}>{type}: {count}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-lg font-medium mt-6">Total Cost: <span className="font-normal">${totalPrice.toFixed(2)}</span></p>
                    <div className="flex justify-center mt-10 text-sm">
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded" onClick={() => navigate('/')}>Return to Home</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PurchaseConfirmation;