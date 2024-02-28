import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './Navbar';

const Checkout = () => {
    const location = useLocation();
    const { movie, selectedShowtime, ticketCounts, ticketPrices, totalPrice } = location.state || {};
    const navigate = useNavigate();
    const [showCreditCardForm, setShowCreditCardForm] = useState(true);

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

    const renderCreditCardForm = (useSavedCard) => {
        if (useSavedCard) {
            // Logic to handle rendering a form with saved card details
            // This part is optional based on your requirements
            return <div>Saved card details form</div>;
        } else {
            return (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mt-4">Enter New Card Information</h3>
                    <form className="space-y-4">
                        <div className="mt-6 sm:col-span-3">
                            <label htmlFor="card-type" className="block text-sm font-medium leading-6 text-gray-900">
                            Card Type
                            </label>
                            <div className="mt-2">
                            <select
                                id="card-type" 
                                name="card-type"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Mastercard</option>
                                <option>VISA</option>
                                <option>American Express</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on Card</label>
                            <input type="text" id="cardName" name="cardName" required className="mt-1 block w-8/12 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>
                        <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                            <input type="text" id="cardNumber" name="cardNumber" required className="mt-1 block w-8/12 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>
                        <div className="flex space-x-4">
                            <div>
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            <div>
                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                                <input type="text" id="cvv" name="cvv" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                        </div>
                        {/* Add any additional fields or buttons as needed */}
                    </form>
                </div>
            );
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-200 mt-6">
                <div className="w-full max-w-4xl p-8 space-y-8 bg-white shadow-lg rounded-xl">
                    <div className="flex min-h-full flex-1 flex-col justify-center">
                        <h2 className="text-start text-3xl font-bold leading-9 tracking-tight text-gray-900">
                            Checkout
                        </h2>
                        <h2 className="text-start text-lg font-semibold leading-9 tracking-tight text-gray-900 mt-2">
                            {movie.name}
                        </h2>
                        <p className="text-start text-m text-gray-700 mt-2">
                            {selectedShowtime.name}
                        </p>

                        <div class="relative flex py-5 items-center">
                            <div class="flex-grow border-t border-gray-100"></div>
                        </div>

                        <ul className="divide-y divide-gray-100 flex justify-center flex-col items-center mt-4 mb-4">
                            <li className="items-center text-m w-7/12 text-center mt-4">
                                {Object.entries(ticketCounts).map(([type, count]) => (
                                    <p key={type}>{type} Tickets: {count} x ${ticketPrices[type]}</p>
                                ))}
                            </li>
                        </ul>

                        <ul className="flex justify-center flex-col items-center mt-2 mb-4">
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

                        <div class="relative flex py-5 items-center">
                            <div class="flex-grow border-t border-gray-100"></div>
                        </div>

                        {/* Checkbox to toggle Credit Card Form */}
                        <div className="mt-6">
                        <label htmlFor="billing-address" className="flex items-center text-sm">
                            <input
                            type="checkbox"
                            id="billing-address"
                            name="billing-address"
                            checked={showCreditCardForm}
                            onChange={() => setShowCreditCardForm(!showCreditCardForm)}
                            className="mr-2 text-indigo-600"
                            />
                            Use Saved Credit Card
                        </label>
                        </div>

                        {/* Conditionally render the second address form */}
                        {!showCreditCardForm && renderCreditCardForm(false)}

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