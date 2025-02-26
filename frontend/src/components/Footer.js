import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-600  py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p className="text-white">
                            We are dedicated to simplifying your tax filing process with advanced tools and features.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy" className="text-white hover:text-white transition duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white hover:text-white transition duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white hover:text-white transition duration-300">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/resources" className="text-white hover:text-white transition duration-300">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-white-lg font-bold mb-4">Contact Us</h3>
                        <ul className="text-white space-y-2">
                            <li>Email: support@taxassistant.com</li>
                            <li>Phone: +1 (123) 456-7890</li>
                            <li>Address: 123 Tax Street, Finance City</li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-white-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white transition duration-300"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white transition duration-300"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white transition duration-300"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white transition duration-300"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Tax Assistant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;