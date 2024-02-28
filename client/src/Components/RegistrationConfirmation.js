import React from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const RegistrationConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // Assuming email is passed in location.state
    const { email } = location.state || {};

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-20 p-4">
                <div className="bg-white rounded-lg shadow p-6 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Registration Successful!</h2>
                    <p className="text-center text-sm font-normal">Please verify the email sent to <span className="font-semibold">{email}</span></p>
                    <div className="flex justify-center mt-10 text-sm">
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded" onClick={() => navigate('/Login')}>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationConfirmation;