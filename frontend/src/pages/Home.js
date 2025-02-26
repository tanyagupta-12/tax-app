import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; // Import the Navbar
import Footer from '../components/Footer';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-[50vh] gradient-bg flex flex-col items-center justify-center text-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Simplify Your Tax Filing Process
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8">
                        Automated calculations, deduction identification, and error-free filing.
                    </p>
                    <button
                        className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300"
                        onClick={() => navigate('/register')}
                    >
                        Get Started
                    </button>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Automated Calculations</h3>
                            <p className="text-gray-600">
                                Effortlessly calculate your taxes with our advanced algorithms. As you input your financial data, our system performs real-time calculations, providing you with instant feedback on your tax obligations. No more waiting until the end of the process to see how much you owe!
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Deduction Finder</h3>
                            <p className="text-gray-600">
                                Discover all eligible deductions to maximize your savings. Our Deduction Finder is an essential tool designed to help you uncover every possible deduction you qualify for, ensuring that you minimize your tax liability and maximize your potential refund.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Error Minimization</h3>
                            <p className="text-gray-600">
                                Reduce errors and ensure accurate tax filings. Filing taxes can be a complex process, and even small mistakes can lead to significant consequences, including delays, penalties, or missed deductions. Our Tax Assistant is designed to help you navigate this complexity with confidence. 
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 italic">
                                "This tool saved me hours of work! Highly recommended."
                            </p>
                            <p className="text-gray-800 font-semibold mt-4">- Anita</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 italic">
                                "The deduction finder helped me save thousands of dollars."
                            </p>
                            <p className="text-gray-800 font-semibold mt-4">- Arun</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 italic">
                                "Error-free filing made tax season stress-free for me."
                            </p>
                            <p className="text-gray-800 font-semibold mt-4">- Devesh</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Step 1: Input Data</h3>
                            <p className="text-gray-600">
                                Enter your financial details securely.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Step 2: Get Calculations</h3>
                            <p className="text-gray-600">
                                Our system calculates your taxes automatically.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Step 3: File Taxes</h3>
                            <p className="text-gray-600">
                                Download or file your taxes directly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
        </div>
    );
};

export default Home;