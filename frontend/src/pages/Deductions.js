import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Deductions = () => {
    const [deductions, setDeductions] = useState([
        { id: 1, category: 'Medical Expenses', amount: 1500 },
        { id: 2, category: 'Education Fees', amount: 2000 },
        { id: 3, category: 'Charitable Donations', amount: 500 },
    ]);

    const [newDeduction, setNewDeduction] = useState({ category: '', amount: '' });
    const [editDeductionId, setEditDeductionId] = useState(null);

    const handleAddDeduction = (e) => {
        e.preventDefault();

        if (!newDeduction.category || !newDeduction.amount) {
            alert('Please fill out all fields.');
            return;
        }

        if (editDeductionId) {
            // Edit existing deduction
            const updatedDeductions = deductions.map((deduction) =>
                deduction.id === editDeductionId
                    ? { ...deduction, category: newDeduction.category, amount: parseFloat(newDeduction.amount) }
                    : deduction
            );
            setDeductions(updatedDeductions);
            setEditDeductionId(null);
        } else {
            // Add new deduction
            const newDeductionItem = {
                id: Date.now(),
                category: newDeduction.category,
                amount: parseFloat(newDeduction.amount),
            };
            setDeductions([...deductions, newDeductionItem]);
        }

        setNewDeduction({ category: '', amount: '' });
    };

    const handleEditDeduction = (deduction) => {
        setNewDeduction({ category: deduction.category, amount: deduction.amount });
        setEditDeductionId(deduction.id);
    };

    const handleDeleteDeduction = (id) => {
        const updatedDeductions = deductions.filter((deduction) => deduction.id !== id);
        setDeductions(updatedDeductions);
    };

    const totalDeductions = deductions.reduce((total, deduction) => total + deduction.amount, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-blue-600 text-center mb-12"
                >
                    Deductions
                </motion.h1>

                {/* Total Deductions */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg mb-8"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Total Deductions</h2>
                    <p className="text-3xl font-semibold text-gray-700">${totalDeductions.toLocaleString()}</p>
                </motion.div>

                {/* Add/Edit Deduction Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg mb-8"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">
                        {editDeductionId ? 'Edit Deduction' : 'Add Deduction'}
                    </h2>
                    <form onSubmit={handleAddDeduction} className="space-y-4">
                        <div>
                            <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                value={newDeduction.category}
                                onChange={(e) => setNewDeduction({ ...newDeduction, category: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter category"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">
                                Amount
                            </label>
                            <input
                                type="number"
                                id="amount"
                                value={newDeduction.amount}
                                onChange={(e) => setNewDeduction({ ...newDeduction, amount: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter amount"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            {editDeductionId ? 'Update Deduction' : 'Add Deduction'}
                        </button>
                    </form>
                </motion.div>

                {/* Deductions List */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Your Deductions</h2>
                    {deductions.length === 0 ? (
                        <p className="text-gray-700">No deductions added yet.</p>
                    ) : (
                        <div className="space-y-4">
                            {deductions.map((deduction) => (
                                <div
                                    key={deduction.id}
                                    className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
                                >
                                    <div>
                                        <p className="text-lg font-semibold text-gray-700">{deduction.category}</p>
                                        <p className="text-gray-600">${deduction.amount.toLocaleString()}</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => handleEditDeduction(deduction)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteDeduction(deduction.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Deductions;