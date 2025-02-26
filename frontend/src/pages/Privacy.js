import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const sections = [
        {
            id: 'introduction',
            title: 'Introduction',
            content: 'At TaxApp, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services. By using TaxApp, you agree to the terms outlined in this policy.',
        },
        {
            id: 'information-collected',
            title: 'Information We Collect',
            content: 'We may collect the following types of information:',
            list: [
                'Personal Information: Name, email address, and contact details.',
                'Financial Information: Income, expenses, and deductions for tax calculations.',
                'Usage Data: Information about how you interact with our platform.',
            ],
        },
        {
            id: 'use-of-information',
            title: 'How We Use Your Information',
            content: 'We use your information to:',
            list: [
                'Provide and improve our services.',
                'Process tax calculations and generate reports.',
                'Communicate with you about updates and support.',
            ],
        },
        {
            id: 'data-security',
            title: 'Data Security',
            content: 'We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
        },
        {
            id: 'third-party-services',
            title: 'Third-Party Services',
            content: 'We may use third-party services to process data or provide functionality. These services have their own privacy policies, and we encourage you to review them.',
        },
        {
            id: 'your-rights',
            title: 'Your Rights',
            content: 'You have the right to:',
            list: [
                'Access and update your personal information.',
                'Request deletion of your data.',
                'Opt-out of communications.',
            ],
        },
        {
            id: 'policy-changes',
            title: 'Changes to This Policy',
            content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.',
        },
        {
            id: 'contact-us',
            title: 'Contact Us',
            content: 'If you have any questions about this Privacy Policy, please contact us at ',
            email: 'privacy@taxapp.com',
        },
    ];

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
                    Privacy Policy
                </motion.h1>

                {/* Privacy Policy Sections */}
                {sections.map((section) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg mb-6 cursor-pointer"
                        onClick={() => toggleSection(section.id)}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-blue-600">{section.title}</h2>
                            <motion.div
                                animate={{ rotate: expandedSections[section.id] ? 180 : 0 }}
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
                        </div>
                        {expandedSections[section.id] && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                                className="mt-4"
                            >
                                <p className="text-gray-700 leading-relaxed">{section.content}</p>
                                {section.list && (
                                    <ul className="list-disc list-inside text-gray-700 mt-4">
                                        {section.list.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {section.email && (
                                    <p className="text-gray-700 leading-relaxed mt-4">
                                        <a
                                            href={`mailto:${section.email}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {section.email}
                                        </a>
                                    </p>
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Privacy;