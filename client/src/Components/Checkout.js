import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Checkout = () => {
    const location = useLocation();
    const { movie, selectedShowtime, ticketCounts, ticketPrices, totalPrice } = location.state || {};
    const navigate = useNavigate();

    // Sales tax rate
    const salesTaxRate = 0.06; // 6%

    // Calculate sales tax
    const salesTax = totalPrice * salesTaxRate;

    // Calculate final total after tax
    const finalTotal = totalPrice + salesTax;

    const handleNextClick = () => {
        navigate('/', {
            state: {
                movie: movie,
                selectedShowtime: selectedShowtime,
                ticketCounts: ticketCounts,
                ticketPrices: ticketPrices,
                totalPrice: totalPrice
            }
        });
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-200 mt-6">
                <div className="w-full max-w-4xl p-8 space-y-8 bg-white shadow-lg rounded-xl">
                    <div className="flex min-h-full flex-1 flex-col justify-center">
                        <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                            Checkout
                        </h2>
                        <h2 className="text-center text-lg font-semibold leading-9 tracking-tight text-gray-900 mt-2">
                            {movie.name}
                        </h2>
                        <p className="text-center text-m text-gray-700 mt-2">
                            {selectedShowtime.name}
                        </p>

                        <div class="relative flex py-5 items-center">
                            <div class="flex-grow border-t border-gray-100"></div>
                            <span class="flex-shrink mx-4 text-gray-100">Order</span>
                            <div class="flex-grow border-t border-gray-100"></div>
                        </div>

                        <ul className="divide-y divide-gray-100 flex justify-center flex-col items-center mt-4 mb-4">
                            <li className="items-center text-m w-7/12 text-center mt-4">
                                {Object.entries(ticketCounts).map(([type, count]) => (
                                    <p key={type}>{type} Tickets: {count} x ${ticketPrices[type]}</p>
                                ))}
                            </li>
                        </ul>

                        <div class="relative flex py-5 items-center">
                            <div class="flex-grow border-t border-gray-100"></div>
                            <span class="flex-shrink mx-4 text-gray-100">Payment</span>
                            <div class="flex-grow border-t border-gray-100"></div>
                        </div>

                        <ul className="flex justify-center flex-col items-center mt-4">
                            <li className="items-center text-m w-7/12 text-center">
                                <p>Subtotal: ${totalPrice.toFixed(2)}</p>
                            </li>
                            <li className="items-center text-m w-7/12 text-center">
                                <p>Tax: ${salesTax.toFixed(2)}</p>
                            </li>
                            <li className="items-center text-m w-7/12 text-center font-semibold">
                                <p>Final Total: ${finalTotal.toFixed(2)}</p>
                            </li>
                        </ul>
                        <div className="flex flex-row mt-16 space-x-4 justify-center">
                            <button 
                                onClick={() => navigate(-1)}
                                className="px-20 py-2 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:text-indigo-400 hover:border-indigo-400"
                            >
                            Back to Order Summary
                            </button>
                            <button
                                className="px-20 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-400"
                                onClick={() => handleNextClick(movie)}
                            >
                            Complete Purchase
                            </button>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;