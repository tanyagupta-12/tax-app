import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ErrorCheck = () => {
    const [errors, setErrors] = useState([
        {
            id: 1,
            type: 'Missing Information',
            description: 'Your income details are incomplete. Please provide the missing information.',
            resolved: false,
        },
        {
            id: 2,
            type: 'Incorrect Deduction',
            description: 'The deduction amount entered seems unusually high. Please verify the amount.',
            resolved: false,
        },
        {
            id: 3,
            type: 'Duplicate Entry',
            description: 'You have entered the same expense twice. Please remove the duplicate entry.',
            resolved: false,
        },
    ]);

    const markAsResolved = (id) => {
        setErrors((prevErrors) =>
            prevErrors.map((error) =>
                error.id === id ? { ...error, resolved: !error.resolved } : error
            )
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-blue-600 text-center mb-12"
                >
                    Error Check
                </motion.h1>

                {/* Error List */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {errors.map((error) => (
                        <motion.div
                            key={error.id}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className={`bg-white p-6 rounded-lg shadow-lg ${
                                error.resolved ? 'opacity-50' : 'opacity-100'
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-600 mb-2">
                                        {error.type}
                                    </h3>
                                    <p className="text-gray-700">{error.description}</p>
                                </div>
                                <button
                                    onClick={() => markAsResolved(error.id)}
                                    className={`px-4 py-2 rounded-lg transition duration-300 ${
                                        error.resolved
                                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                                    }`}
                                >
                                    {error.resolved ? 'Resolved' : 'Mark as Resolved'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* No Errors Message */}
                {errors.every((error) => error.resolved) && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg mt-6 text-center"
                    >
                        🎉 All errors have been resolved! You're good to go.
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ErrorCheck;