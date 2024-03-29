import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../firebaseConfig';

export default function Register() {
  const [showBillingAddress, setShowBillingAddress] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [billCity, setBillCity] = useState('');
  const [billCountry, setBillCountry] = useState('United States');
  const [billState, setBillState] = useState('');
  const [billStreet, setBillStreet] = useState('');
  const [billZip, setBillZip] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('Mastercard');
  const [expDate, setExpDate] = useState('');
  const [cvv, setcvv] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('United States');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!showBillingAddress){
      setBillCity(city)
      setBillCountry(country)
      setBillState(state)
      setBillStreet(street)
      setBillZip(zip)
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const newUser = {
      email,
      password,
      firstName,
      lastName,
      phone,
      street,
      city,
      state,
      country,
      zip,
      billStreet,
      billCity,
      billState,
      billCountry,
      billZip,
      cardName,
      cardNumber,
      cardType,
      expDate,
      cvv,
      status: "User",
    };

    try {
      await addDoc(collection(db, "accounts"), newUser);
      alert("User registered successfully!");
      navigate('/registration-confirmation', { state: { email } });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to register user.");
    }
  };

  const getPasswordInputClassName = () => {
    if (!confirmPassword) return "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
    return password === confirmPassword ? "block w-full rounded-md border-green-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" : "block w-full rounded-md border-red-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  };

  const renderAddressForm = () => (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        {"Address"}
      </h2>
      <p className="mt-1 text-xs font-light leading-6 text-gray-900">Not Required</p>

      <div className="mt-10 sm:col-span-3">
        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
          Country
        </label>
        <div className="mt-2">
          <select
            id="billCountry"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>

      <div className="mt-10 col-span-full">
        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
          Street Address
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-6 mt-10">
        <div className="col-span-2">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-2">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
            State / Province
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-2">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingAddressForm = () => (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        {"Billing Address"}
      </h2>
      <p className="mt-1 text-xs font-light leading-6 text-gray-900">Not Required</p>

      <div className="mt-10 sm:col-span-3">
        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
          Country
        </label>
        <div className="mt-2">
          <select
            id="billCountry"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={(e) => setBillCountry(e.target.value)}
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>

      <div className="mt-10 col-span-full">
        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
          Street Address
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setBillStreet(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-6 mt-10">
        <div className="col-span-2">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setBillCity(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-2">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
            State / Province
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setBillState(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-2">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setBillZip(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen py-10">
      <div className="w-full max-w-3xl p-8 space-y-8 bg-white shadow-lg rounded-xl">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-900">Register</h2>
                </div>

                <div className="mt-8 border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                  <p className="mt-1 text-xs font-light leading-6 text-red-500">Required*</p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          name="phone"
                          type="phone"
                          autoComplete="phone"
                          className="block w-5/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email Address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-7/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="password-confirm" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                      </label>
                      <div className="mt-2 relative">
                        <input
                          id="password-confirm"
                          name="password-confirm"
                          type="password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className={getPasswordInputClassName()}
                        />
                        {password && confirmPassword && (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            {password === confirmPassword ? (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {renderAddressForm()}

                <div className="mt-6">
                  <label htmlFor="billing-address" className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      id="billing-address"
                      name="billing-address"
                      checked={showBillingAddress}
                      onChange={() => setShowBillingAddress(!showBillingAddress)}
                      className="mr-2"
                    />
                    Use a Different Billing Address
                  </label>
                </div>

                {showBillingAddress && renderBillingAddressForm()}

                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Card Information</h2>
                  <p className="mt-1 text-xs font-light leading-6 text-gray-900">Not Required</p>

                  <div className="mt-10 sm:col-span-3">
                    <label htmlFor="card-type" className="block text-sm font-medium leading-6 text-gray-900">
                      Card Type
                    </label>
                    <div className="mt-2">
                      <select
                        id="card-type" 
                        name="card-type"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) => setCardType(e.target.value)}
                      >
                        <option value={"Mastercard"}>Mastercard</option>
                        <option value={"VISA"}>VISA</option>
                        <option value={"American Express"}>American Express</option>
                        <option value={"Discover"}>Discover</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium mt-10 text-gray-700">Name on Card</label>
                    <input 
                    onChange={(e) => setCardName(e.target.value)}
                    type="text" id="cardName" name="cardName" required className="mt-1 block w-8/12 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  </div>

                  <div className="mt-10 col-span-full">
                    <label htmlFor="card-number" className="block text-sm font-medium leading-6 text-gray-900">
                      Card Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="card-number"
                        id="card-number"
                        className="block w-8/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-6 mt-10">
                    <div className="col-span-2">
                      <label htmlFor="expiration-date" className="block text-sm font-medium leading-6 text-gray-900">
                        Expiration Date
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="expiration-date"
                          id="expiration-date"
                          placeholder="MM/YY"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setExpDate(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label htmlFor="cvv" className="block text-sm font-medium leading-6 text-gray-900">
                        CVV
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="cvv"
                          id="cvv"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setcvv(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button 
                    type="button" 
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
