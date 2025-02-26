import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setError('All fields are required.');
            return;
        }

        // Clear error if validation passes
        setError('');

        // Simulate form submission (replace with actual API call)
        console.log('Form Data Submitted:', formData);
        setSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Us</h2>
                {submitted && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg mb-6 text-center"
                    >
                        Thank you for contacting us! We'll get back to you soon.
                    </motion.div>
                )}
                {error && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg mb-6 text-center"
                    >
                        {error}
                    </motion.div>
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
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your message"
                            rows="4"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </motion.button>
                </form>

                {/* Additional Information */}
                <div className="mt-6 text-center text-gray-600">
                    <p>Or reach out directly at:</p>
                    <p className="font-semibold">support@taxapp.com</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;