import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Clear error if validation passes
        setError('');

        try {
            // Send registration request to the backend
            const response = await axios.post('http://localhost:5000/register', {
                name,
                email,
                password,
            });

            if (response.data.success) {
                // Registration successful, redirect to login page
                navigate('/login');
            } else {
                setError(response.data.message || 'Registration failed. Please try again.');
            }
        } catch (err) {
            console.error('Registration error:', err);
            if (err.response) {
                setError(err.response.data.message || 'An error occurred. Please try again.');
            } else if (err.request) {
                setError('No response from the server. Please check your connection.');
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-6">
            {/* Registration Form */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Register</h2>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg mb-6">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-blue-600 hover:text-blue-800 transition duration-300"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;