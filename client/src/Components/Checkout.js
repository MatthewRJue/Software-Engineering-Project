import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, Fragment } from 'react'
import Navbar from './Navbar';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const Checkout = () => {
    const location = useLocation();
    const { movie, selectedShowtime, ticketCounts, ticketPrices, totalPrice } = location.state || {};
    const navigate = useNavigate();
    const [showCreditCardForm, setShowCreditCardForm] = useState(true);
    const [selectedCard, setSelectedCard] = useState(null);
    const [promoCode, setPromoCode] = useState('');

    // Sample saved cards
    const savedCards = [
        { id: 1, type: 'Mastercard', last4: '1234' },
        { id: 2, type: 'VISA', last4: '5678' }
    ];

    // Sales tax rate
    const salesTaxRate = 0.06; // 6%

    // Calculate sales tax
    const salesTax = totalPrice * salesTaxRate;

    // Calculate final total after tax
    const finalTotal = totalPrice + salesTax;

    const handleNextClick = () => {
        navigate('/purchase-confirmation', {
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
            return (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mt-4 mb-6">Select Saved Card</h3>
                    <Listbox value={selectedCard} onChange={setSelectedCard}>
                        {({ open }) => (
                            <>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-7/12 py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <span className="block truncate">{selectedCard ? `${selectedCard.type} ending in ${selectedCard.last4}` : 'Select a card'}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 w-7/12 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {savedCards.map((card) => (
                                                <Listbox.Option
                                                    key={card.id}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-indigo-100' : 'text-gray-900'}`
                                                    }
                                                    value={card}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                                {card.type} ending in {card.last4}
                                                            </span>
                                                            {selected ? (
                                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-indigo-600' : 'text-indigo-600'}`}>
                                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>
                </div>
            );
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

                        <div className="flex justify-center flex-col items-center mt-4 mb-4">
                            <div className="flex items-center w-7/12 space-x-4">
                                <input
                                    type="text"
                                    placeholder="Promotion Code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <button
                                    onClick={() => {/* Handle promotion code confirmation here */}}
                                    className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>

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
                        {showCreditCardForm && renderCreditCardForm(true)}
                        {!showCreditCardForm && renderCreditCardForm(false)}

                        <div className="flex flex-row mt-20 space-x-4 justify-center">
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