import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Removed Link
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TaxCalculation = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [deductions, setDeductions] = useState(0);
    const [taxableIncome, setTaxableIncome] = useState(0);
    const [taxAmount, setTaxAmount] = useState(0);
    const [taxRate, setTaxRate] = useState(0.15); // Default tax rate
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = () => {
            const storedIncome = parseFloat(localStorage.getItem('income')) || 0;
            const storedExpenses = parseFloat(localStorage.getItem('expenses')) || 0;
            const storedDeductions = parseFloat(localStorage.getItem('deductions')) || 0;

            setIncome(storedIncome);
            setExpenses(storedExpenses);
            setDeductions(storedDeductions);

            const calculatedTaxableIncome = storedIncome - storedExpenses - storedDeductions;
            const calculatedTaxAmount = Math.max(calculatedTaxableIncome, 0) * taxRate;

            setTaxableIncome(calculatedTaxableIncome);
            setTaxAmount(calculatedTaxAmount);
            setLoading(false);
        };

        const fetchTaxRate = async () => {
            try {
                // Replace with your API endpoint or logic to fetch the current tax rate
                const response = await fetch('https://api.example.com/tax-rate');
                const data = await response.json();
                setTaxRate(data.taxRate);
            } catch (error) {
                console.error('Failed to fetch tax rate:', error);
            }
        };

        fetchTaxRate();
        fetchData();
    }, [taxRate]);

    const handleRecalculate = () => {
        navigate('/input-data');
    };

    const handleProceedToFiling = () => {
        navigate('/filing', {
            state: {
                income,
                expenses,
                deductions,
                taxableIncome,
                taxAmount,
                taxRate,
            },
        });
    };

    // Data for the bar chart
    const chartData = [
        { name: 'Income', value: income },
        { name: 'Expenses', value: expenses },
        { name: 'Deductions', value: deductions },
        { name: 'Taxable Income', value: taxableIncome },
        { name: 'Tax Amount', value: taxAmount },
    ];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="text-2xl font-semibold text-blue-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-blue-800">Tax Calculation Dashboard</h1>
                <p className="text-gray-600">Review your financial data and tax calculations.</p>
            </header>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Income Card */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                >
                    <h3 className="text-xl font-semibold text-blue-600">Income</h3>
                    <p className="text-2xl font-bold text-gray-800">${income.toFixed(2)}</p>
                </motion.div>

                {/* Expenses Card */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                >
                    <h3 className="text-xl font-semibold text-blue-600">Expenses</h3>
                    <p className="text-2xl font-bold text-gray-800">${expenses.toFixed(2)}</p>
                </motion.div>

                {/* Deductions Card */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                >
                    <h3 className="text-xl font-semibold text-blue-600">Deductions</h3>
                    <p className="text-2xl font-bold text-gray-800">${deductions.toFixed(2)}</p>
                </motion.div>
            </div>

            {/* Tax Calculation Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Tax Calculation Details */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                >
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Tax Calculation</h3>
                    <div className="space-y-4">
                        {/* Income */}
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Income:</p>
                            <p className="text-gray-800 font-semibold">${income.toFixed(2)}</p>
                        </div>

                        {/* Expenses */}
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Expenses:</p>
                            <p className="text-gray-800 font-semibold">${expenses.toFixed(2)}</p>
                        </div>

                        {/* Deductions */}
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Deductions:</p>
                            <p className="text-gray-800 font-semibold">${deductions.toFixed(2)}</p>
                        </div>

                        {/* Taxable Income */}
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Taxable Income:</p>
                            <p className="text-gray-800 font-semibold">${taxableIncome.toFixed(2)}</p>
                        </div>

                        {/* Tax Rate */}
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Tax Rate:</p>
                            <p className="text-gray-800 font-semibold">{(taxRate * 100).toFixed(2)}%</p>
                        </div>

                        {/* Tax Amount */}
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Tax Amount:</p>
                            <p className="text-gray-800 font-semibold">${taxAmount.toFixed(2)}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Bar Chart */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                >
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Financial Overview</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#3b82f6" />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>

            {/* Buttons Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-4"
            >
                <button
                    onClick={handleRecalculate}
                    className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                    </svg>
                    Recalculate
                </button>
                <button
                    onClick={handleProceedToFiling}
                    className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    Proceed to Filing
                </button>
            </motion.div>
        </div>
    );
};

export default TaxCalculation;