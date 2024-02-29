import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('info'); // 'info', 'history', or 'billing'
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    country: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
  });
  const [creditCards, setCreditCards] = useState([
    { cardType: '', cardName: '', cardNumber: '', expirationDate: '', cvv: '' },
  ]);
  const [orderHistory, setOrderHistory] = useState([
    { id: 1, item: 'Ticket A', date: '2023-01-01' },
    { id: 2, item: 'Ticket B', date: '2023-02-01' },
  ]);

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreditCardChange = (index, e) => {
    const { name, value } = e.target;
    const newCreditCards = [...creditCards];
    newCreditCards[index][name] = value;
    setCreditCards(newCreditCards);
  };

  const addCreditCard = () => {
    if (creditCards.length < 3) {
      setCreditCards([...creditCards, { cardType: '', cardName: '', cardNumber: '', expirationDate: '', cvv: '' }]);
    }
  };

  const removeCreditCard = (index) => {
    const newCreditCards = [...creditCards];
    newCreditCards.splice(index, 1);
    setCreditCards(newCreditCards);
  };

  const renderCardInformationForms = () => creditCards.map((card, index) => (
    <div key={index} className="border-b border-gray-900/10 pb-12 mt-4">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Card Information {index + 1}</h2>
      <div className="mt-4">
        <label htmlFor="card-type" className="block text-sm font-medium leading-6 text-gray-900">Card Type</label>
        <select
          id={`card-type-${index}`}
          name="cardType"
          value={card.cardType}
          onChange={(e) => handleCreditCardChange(index, e)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option>Mastercard</option>
          <option>VISA</option>
          <option>American Express</option>
          <option>Discover</option>
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="cardName" className="block text-sm font-medium leading-6 text-gray-900">Name on Card</label>
        <input
          type="text"
          id={`cardName-${index}`}
          name="cardName"
          value={card.cardName}
          onChange={(e) => handleCreditCardChange(index, e)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="card-number" className="block text-sm font-medium leading-6 text-gray-900">Card Number</label>
        <input
          type="text"
          id={`card-number-${index}`}
          name="cardNumber"
          value={card.cardNumber}
          onChange={(e) => handleCreditCardChange(index, e)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expiration-date" className="block text-sm font-medium leading-6 text-gray-900">Expiration Date</label>
          <input
            type="text"
            id={`expiration-date-${index}`}
            name="expirationDate"
            placeholder="MM/YY"
            value={card.expirationDate}
            onChange={(e) => handleCreditCardChange(index, e)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium leading-6 text-gray-900">CVV</label>
          <input
            type="text"
            id={`cvv-${index}`}
            name="cvv"
            value={card.cvv}
            onChange={(e) => handleCreditCardChange(index, e)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="mt-4">
        {creditCards.length > 1 && (
          <button type="button" onClick={() => removeCreditCard(index)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
            Remove Card
          </button>
        )}
      </div>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated User Info:', userInfo);
    console.log('Credit Cards:', creditCards);
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 p-4">
          <ul className="flex flex-col">
            <li className={`p-2 ${activeTab === 'info' ? 'bg-gray-200' : ''}`} onClick={() => setActiveTab('info')}>Update Personal Information</li>
            <li className={`p-2 ${activeTab === 'billing' ? 'bg-gray-200' : ''}`} onClick={() => setActiveTab('billing')}>Billing Information</li>
            <li className={`p-2 ${activeTab === 'history' ? 'bg-gray-200' : ''}`} onClick={() => setActiveTab('history')}>Order History</li>
          </ul>
        </div>
        <div className="w-3/4 p-4">
          {activeTab === 'info' && (
            <form onSubmit={handleSubmit}>
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <div className="mt-4">
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleUserInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleUserInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleUserInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleUserInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={userInfo.country}
                    onChange={handleUserInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                    {/* Add more countries as needed */}
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="streetAddress" className="block text-sm font-medium leading-6 text-gray-900">Street Address</label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={userInfo.streetAddress}
                    onChange={handleUserInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={userInfo.city}
                    onChange={handleUserInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                  <input
                    type="text"
                    id="region"
                    name="region"
                    value={userInfo.region}
                    onChange={handleUserInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={userInfo.postalCode}
                    onChange={handleUserInfoChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">Update Information</button>
              </div>
            </form>
          )}
          {activeTab === 'history' && (
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Order History</h2>
              <ul className="divide-y divide-gray-100 p-20">
                {orderHistory.map((order) => (
                  <li key={order.id} className="flex justify-between gap-x-6 py-5 bg-white shadow-lg rounded-xl p-8 space-y-8 mb-6">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-3xl font-semibold leading-6 text-gray-900">{order.item}</p>
                        <p className="mt-4 truncate text-sm leading-5 text-gray-500">Order Date: {order.date}</p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">Order ID: {order.id}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'billing' && (
            <form onSubmit={handleSubmit}>
              {renderCardInformationForms()}
              {creditCards.length < 3 && (
                <button type="button" onClick={addCreditCard} className="mt-4 mr-4 px-4 py-2 bg-green-500 text-white rounded">
                  Add Another Card
                </button>
              )}
              <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}