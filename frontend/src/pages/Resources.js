import React from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
    const resourceCategories = [
        {
            id: 'guides',
            title: 'Guides',
            items: [
                {
                    id: 1,
                    title: 'How to File Your Taxes',
                    description: 'A step-by-step guide to filing your taxes efficiently.',
                    link: '#',
                },
                {
                    id: 2,
                    title: 'Understanding Tax Deductions',
                    description: 'Learn about common tax deductions and how to claim them.',
                    link: '#',
                },
                {
                    id: 3,
                    title: 'Tax Planning for Freelancers',
                    description: 'Tips and strategies for freelancers to manage their taxes.',
                    link: '#',
                },
            ],
        },
        {
            id: 'articles',
            title: 'Articles',
            items: [
                {
                    id: 4,
                    title: 'Top Tax Mistakes to Avoid',
                    description: 'Common tax mistakes and how to avoid them.',
                    link: '#',
                },
                {
                    id: 5,
                    title: 'Tax Benefits of Homeownership',
                    description: 'Explore the tax benefits of owning a home.',
                    link: '#',
                },
                {
                    id: 6,
                    title: 'Retirement Savings and Taxes',
                    description: 'How retirement savings impact your taxes.',
                    link: '#',
                },
            ],
        },
        {
            id: 'tools',
            title: 'Tools',
            items: [
                {
                    id: 7,
                    title: 'Tax Calculator',
                    description: 'Calculate your taxes with our easy-to-use tool.',
                    link: '#',
                },
                {
                    id: 8,
                    title: 'Deduction Finder',
                    description: 'Find out which deductions you qualify for.',
                    link: '#',
                },
                {
                    id: 9,
                    title: 'Tax Deadline Tracker',
                    description: 'Never miss a tax deadline with our tracker.',
                    link: '#',
                },
            ],
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
                    Resources
                </motion.h1>

                {/* Resource Categories */}
                {resourceCategories.map((category) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-blue-600 mb-6">{category.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                                    <p className="text-gray-700 mb-4">{item.description}</p>
                                    <a
                                        href={item.link}
                                        className="text-blue-600 hover:text-blue-800 transition duration-300"
                                    >
                                        Learn More →
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Resources;