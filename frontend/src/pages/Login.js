import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            console.log('Sending login request with:', { email, password }); // Debugging

            // Send login request to the backend
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });

            console.log('Login response:', response); // Debugging

            // Check if login was successful
            if (response.data.success) {
                const user = response.data.user; // User profile data from the backend
                localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
                navigate('/dashboard'); // Redirect to the dashboard
            } else {
                setError(response.data.message || 'Invalid email or password'); // Display backend error message
            }
        } catch (err) {
            console.error('Login error:', err); // Debugging
            if (err.response) {
                // Backend returned an error response
                setError(err.response.data.message || 'An error occurred. Please try again.');
            } else if (err.request) {
                // No response received from the server
                setError('No response from the server. Please check your connection.');
            } else {
                // Other errors (e.g., frontend code issues)
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-4">
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <a href="/register" className="text-blue-600 hover:text-blue-800 transition duration-300">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;