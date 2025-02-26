import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const InputData = () => {
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const [deductions, setDeductions] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!income || !expenses || !deductions) {
            setError('All fields are required.');
            return;
        }

        // Clear error if validation passes
        setError('');

        // Save data to localStorage
        localStorage.setItem('income', income);
        localStorage.setItem('expenses', expenses);
        localStorage.setItem('deductions', deductions);

        console.log('Saving to localStorage:', { income, expenses, deductions });

        // Redirect to the tax calculation page after submission
        navigate('/tax-calculation');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-blue-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Tax Calculator</h2>
                <ul className="space-y-4">
                    <li>
                        <Link to="/input-data" className="hover:text-blue-200 transition duration-300">
                            Input Data
                        </Link>
                    </li>
                    <li>
                        <Link to="/Deductions" className="hover:text-blue-200 transition duration-300">
                            Deductions
                        </Link>
                    </li>
                    <li>
                        <Link to="/Privacy" className="hover:text-blue-200 transition duration-300">
                            Privacy
                        </Link>
                    </li>
                    <li>
                        <Link to="/resources" className="hover:text-blue-200 transition duration-300">
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="hover:text-blue-200 transition duration-300">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/ErrorCheck" className="hover:text-blue-200 transition duration-300">
                        Error Check
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Header */}
                <header className="bg-white shadow-lg p-6 rounded-lg mb-8">
                    <h1 className="text-3xl font-bold text-blue-600">Input Financial Data</h1>
                    <p className="text-gray-600">Enter your financial details to calculate your taxes.</p>
                </header>

                {/* Input Data Form */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg"
                >
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg mb-6">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Income Input */}
                        <div>
                            <label htmlFor="income" className="block text-gray-700 font-semibold mb-2">
                                Income
                            </label>
                            <input
                                type="number"
                                id="income"
                                value={income}
                                onChange={(e) => setIncome(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your income"
                                required
                            />
                        </div>

                        {/* Expenses Input */}
                        <div>
                            <label htmlFor="expenses" className="block text-gray-700 font-semibold mb-2">
                                Expenses
                            </label>
                            <input
                                type="number"
                                id="expenses"
                                value={expenses}
                                onChange={(e) => setExpenses(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your expenses"
                                required
                            />
                        </div>

                        {/* Deductions Input */}
                        <div>
                            <label htmlFor="deductions" className="block text-gray-700 font-semibold mb-2">
                                Deductions
                            </label>
                            <input
                                type="number"
                                id="deductions"
                                value={deductions}
                                onChange={(e) => setDeductions(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your deductions"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Navigation Links */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Need help?{' '}
                            <Link
                                to="/resources"
                                className="text-blue-600 hover:text-blue-800 transition duration-300"
                            >
                                Visit Resources
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InputData;