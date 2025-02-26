import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'John Doe',
            role: 'CEO & Founder',
            image: 'https://via.placeholder.com/150',
            description: 'John is passionate about simplifying tax calculations for everyone.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Lead Developer',
            image: 'https://via.placeholder.com/150',
            description: 'Jane ensures the platform is robust, scalable, and user-friendly.',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            role: 'UX Designer',
            image: 'https://via.placeholder.com/150',
            description: 'Alice designs intuitive and engaging user experiences.',
        },
    ];

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
                    About Us
                </motion.h1>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mb-12"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At TaxApp, our mission is to simplify tax calculations and make financial planning accessible to everyone. We believe that managing your taxes should be easy, transparent, and stress-free.
                    </p>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg"
                >
                    <h2 className="text-2xl font-bold text-blue-600 mb-8 text-center">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <motion.div
                                key={member.id}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white p-6 rounded-lg shadow-md text-center"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-blue-600 mb-2">{member.name}</h3>
                                <p className="text-gray-600 mb-2">{member.role}</p>
                                <p className="text-gray-700">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;