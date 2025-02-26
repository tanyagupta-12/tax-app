import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-indigo-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200 transition duration-300">
                            TaxApp
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4 items-center">
                        <Link
                            to="/register"
                            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                        >
                            Register
                        </Link>
                        <Link
                            to="/login"
                            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                        >
                            Login
                        </Link>
                        <Link
                            to="/contact"
                            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/about"
                            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                        >
                            About
                        </Link>
                        <Link
                            to="/privacy"
                            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                        >
                            Privacy
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 rounded-md transition duration-300"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-blue-600"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/register"
                            className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
                        >
                            Register
                        </Link>
                        <Link
                            to="/login"
                            className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
                        >
                            Login
                        </Link>
                        <Link
                            to="/contact"
                            className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/about"
                            className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
                        >
                            About
                        </Link>
                        <Link
                            to="/privacy"
                            className="text-white block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
                        >
                            Privacy
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;