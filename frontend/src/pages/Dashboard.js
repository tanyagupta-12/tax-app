import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
    const [user, setUser] = useState(null); // User state
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Your tax filing is due in 7 days.', type: 'warning' },
        { id: 2, message: 'You have a new message from the tax office.', type: 'info' },
    ]);
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true); // Loading state

    const quickStats = {
        income: 50000,
        expenses: 10000,
        deductions: 5000,
        taxAmount: 5250,
    };

    const recentActivity = [
        { id: 1, action: 'Added a new deduction: Medical Expenses ($1500)', timestamp: '2 hours ago' },
        { id: 2, action: 'Updated income details.', timestamp: '5 hours ago' },
        { id: 3, action: 'Submitted tax filing for 2022.', timestamp: '1 day ago' },
    ];

    const taxProgress = 75; // 75% complete

    // Doughnut Chart Data (Income, Expenses, Deductions)
    const doughnutData = {
        labels: ['Income', 'Expenses', 'Deductions'],
        datasets: [
            {
                data: [quickStats.income, quickStats.expenses, quickStats.deductions],
                backgroundColor: ['#3b82f6', '#ef4444', '#10b981'],
                hoverBackgroundColor: ['#2563eb', '#dc2626', '#059669'],
            },
        ],
    };

    // Bar Chart Data (Monthly Income)
    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Income',
                data: [4000, 4500, 5000, 4800, 5200, 5500, 6000, 5800, 6200, 6500, 7000, 7500],
                backgroundColor: '#3b82f6',
                borderColor: '#3b82f6',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const handleDismissNotification = (id) => {
        setNotifications(notifications.filter((notification) => notification.id !== id));
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Fetch user data from localStorage
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
            setLoading(false);
        } else {
            // Redirect to login if no user data is found
            window.location.href = '/login';
        }
    }, []);

    // Use navigate for routing
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} py-12 px-6 relative overflow-hidden`}>
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md"></div>

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            >
                {darkMode ? '🌞' : '🌙'}
            </button>

            {/* Input Data Button on Upper-Right Side */}
            <div className="fixed top-16 right-16 z-50"> {/* Adjusted position: top-16, right-16 */}
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate('/input-data')}
                    className="p-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center text-lg" // Increased size with text-lg
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2" // Increased icon size
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    Input Data
                </motion.button>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Page Title and User Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dashboard</h1>
                    <p className={`text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Welcome back, {user.name}!</p>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {[
                        { label: 'Total Income', value: quickStats.income, color: 'blue' },
                        { label: 'Total Expenses', value: quickStats.expenses, color: 'red' },
                        { label: 'Total Deductions', value: quickStats.deductions, color: 'green' },
                        { label: 'Tax Amount', value: quickStats.taxAmount, color: 'purple' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className={`bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-10 hover:bg-opacity-20 transition duration-300 cursor-pointer ${
                                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                            }`}
                            onClick={() => alert(`Clicked: ${stat.label}`)} // Example click handler
                        >
                            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{stat.label}</p>
                            <p className={`text-3xl font-bold text-${stat.color}-400`}>${stat.value.toLocaleString()}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Tax Progress Tracker */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-10 mb-12 ${
                        darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                    }`}
                >
                    <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Tax Filing Progress</h2>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                            className="bg-blue-600 h-4 rounded-full"
                            style={{ width: `${taxProgress}%` }}
                        ></div>
                    </div>
                    <p className={`${darkMode ? 'text-gray-200' : 'text-gray-900'} mt-2`}>{taxProgress}% complete</p>
                </motion.div>

                {/* Charts */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
                >
                    <div
                        className={`bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-10 ${
                            darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                        }`}
                    >
                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Income vs Expenses vs Deductions</h2>
                        <Doughnut data={doughnutData} />
                    </div>
                    <div
                        className={`bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-10 ${
                            darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                        }`}
                    >
                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Monthly Income</h2>
                        <Bar data={barData} options={barOptions} />
                    </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-10 mb-12 ${
                        darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                    }`}
                >
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Recent Activity</h2>
                    <div className="space-y-4">
                        {recentActivity.map((activity) => (
                            <div
                                key={activity.id}
                                className={`flex justify-between items-center p-4 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10 hover:bg-opacity-10 transition duration-300 ${
                                    darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                                }`}
                            >
                                <p className={`${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{activity.action}</p>
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-900'}`}>{activity.timestamp}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Notifications */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white border-opacity-10 ${
                        darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                    }`}
                >
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Notifications</h2>
                    <div className="space-y-4">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`p-4 rounded-lg ${
                                    notification.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                                }`}
                            >
                                <div className="flex justify-between items-center">
                                    <p className={`${darkMode ? 'text-gray-900' : 'text-gray-900'}`}>{notification.message}</p>
                                    <button
                                        onClick={() => handleDismissNotification(notification.id)}
                                        className={`${darkMode ? 'text-gray-900' : 'text-gray-900'} hover:text-gray-700`}
                                    >
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;