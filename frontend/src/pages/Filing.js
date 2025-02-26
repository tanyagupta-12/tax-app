import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Filing = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeStep, setActiveStep] = useState(1);
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    // Retrieve tax data from the Tax Calculation page
    const location = useLocation();
    console.log('Location State:', location.state); // Debugging

    const taxData = location.state || {
        income: 0,
        expenses: 0,
        deductions: 0,
        taxableIncome: 0,
        taxAmount: 0,
        refund: 0,
        amountOwed: 0,
    };

    // Destructure taxData with default values
    const {
        income = 0,
        expenses = 0,
        deductions = 0,
        taxableIncome = 0,
        taxAmount = 0,
        refund = 0,
        amountOwed = 0,
    } = taxData;

    const steps = [
        { id: 1, title: 'Review Tax Summary', description: 'Check your income, expenses, and deductions.' },
        { id: 2, title: 'Upload Documents', description: 'Upload any supporting documents.' },
        { id: 3, title: 'Select Payment Method', description: 'Choose how to pay your taxes (if applicable).' },
        { id: 4, title: 'Confirm Details', description: 'Verify that all information is accurate.' },
        { id: 5, title: 'Submit Filing', description: 'Submit your tax filing for processing.' },
    ];

    const faqs = [
        {
            id: 1,
            question: 'What happens after I submit my tax filing?',
            answer: 'Your filing will be processed by the tax authorities. You will receive a confirmation and any refunds or payment requests.',
        },
        {
            id: 2,
            question: 'Can I make changes after submitting?',
            answer: 'Once submitted, changes cannot be made. Please review your details carefully before submitting.',
        },
        {
            id: 3,
            question: 'How long does it take to process my filing?',
            answer: 'Processing times vary, but typically it takes 2-4 weeks for electronic filings.',
        },
        {
            id: 4,
            question: 'What documents do I need to upload?',
            answer: 'You may need to upload W-2s, 1099s, receipts for deductions, and any other supporting documents.',
        },
        {
            id: 5,
            question: 'How do I know if I owe taxes or will receive a refund?',
            answer: 'Your tax summary will show whether you owe taxes or are due a refund based on your income, deductions, and credits.',
        },
    ];

    const paymentMethods = [
        { id: 'credit-card', name: 'Credit Card' },
        { id: 'bank-transfer', name: 'Bank Transfer' },
        { id: 'paypal', name: 'PayPal' },
    ];

    const handleConfirmation = () => {
        setIsConfirmed(!isConfirmed);
    };

    const handleSubmit = () => {
        if (!isConfirmed) {
            alert('Please confirm your details before submitting.');
            return;
        }
        setShowConfirmationModal(true);
    };

    const confirmSubmission = () => {
        // Simulate submission (replace with actual API call)
        console.log('Tax Filing Submitted:', taxData);
        setIsSubmitted(true);
        setActiveStep(5);
        setShowConfirmationModal(false);
    };

    const toggleFAQ = (id) => {
        setExpandedFAQ(expandedFAQ === id ? null : id);
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setUploadedFiles(files);
    };

    const handlePaymentMethodChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
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
                    Tax Filing
                </motion.h1>

                {/* Progress Tracker */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg mb-8"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Filing Progress</h2>
                    <div className="flex justify-between">
                        {steps.map((step) => (
                            <div key={step.id} className="text-center">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                                        activeStep >= step.id
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-700'
                                    }`}
                                >
                                    {step.id}
                                </div>
                                <p className="text-sm font-semibold text-gray-700">{step.title}</p>
                                <p className="text-xs text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Tax Summary */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mb-8"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Tax Summary</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <p className="text-gray-700">Income:</p>
                            <p className="text-gray-700 font-semibold">${income.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Expenses:</p>
                            <p className="text-gray-700 font-semibold">${expenses.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Deductions:</p>
                            <p className="text-gray-700 font-semibold">${deductions.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 pt-4">
                            <p className="text-gray-700 font-semibold">Taxable Income:</p>
                            <p className="text-gray-700 font-semibold">${taxableIncome.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700 font-semibold">Tax Amount:</p>
                            <p className="text-gray-700 font-semibold">${taxAmount.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700 font-semibold">Refund:</p>
                            <p className="text-green-600 font-semibold">${refund.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700 font-semibold">Amount Owed:</p>
                            <p className="text-red-600 font-semibold">${amountOwed.toLocaleString()}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Document Upload */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mb-8"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Upload Supporting Documents</h2>
                    <div className="space-y-4">
                        <input
                            type="file"
                            multiple
                            onChange={handleFileUpload}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                        {uploadedFiles.length > 0 && (
                            <div className="mt-4">
                                <p className="text-gray-700 font-semibold">Uploaded Files:</p>
                                <ul className="list-disc list-inside text-gray-700">
                                    {uploadedFiles.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Payment Options */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mb-8"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Select Payment Method</h2>
                    <div className="space-y-4">
                        {paymentMethods.map((method) => (
                            <div key={method.id} className="flex items-center">
                                <input
                                    type="radio"
                                    id={method.id}
                                    name="payment-method"
                                    value={method.id}
                                    checked={selectedPaymentMethod === method.id}
                                    onChange={handlePaymentMethodChange}
                                    className="w-5 h-5 mr-4"
                                />
                                <label htmlFor={method.id} className="text-gray-700">
                                    {method.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Confirmation Step */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mb-8"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Confirmation</h2>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="confirmation"
                            checked={isConfirmed}
                            onChange={handleConfirmation}
                            className="w-5 h-5 mr-4"
                        />
                        <label htmlFor="confirmation" className="text-gray-700">
                            I confirm that all the information provided is accurate and complete.
                        </label>
                    </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitted}
                        className={`px-6 py-3 rounded-lg text-white font-semibold transition duration-300 ${
                            isSubmitted
                                ? 'bg-green-500 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {isSubmitted ? 'Submitted Successfully!' : 'Submit Tax Filing'}
                    </button>
                </motion.div>

                {/* FAQs Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="border-b border-gray-200 pb-4">
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full text-left flex justify-between items-center"
                                >
                                    <p className="text-lg font-semibold text-gray-700">{faq.question}</p>
                                    <motion.div
                                        animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </motion.div>
                                </button>
                                {expandedFAQ === faq.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-2 text-gray-700"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Confirmation Modal */}
                {showConfirmationModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
                        >
                            <h2 className="text-2xl font-bold text-blue-600 mb-6">Confirm Submission</h2>
                            <p className="text-gray-700 mb-6">
                                Are you sure you want to submit your tax filing? This action cannot be undone.
                            </p>
                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={() => setShowConfirmationModal(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmSubmission}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Confirm
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filing;