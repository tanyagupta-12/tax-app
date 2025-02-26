const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user database
let users = [
    { id: 1, email: 'user@example.com', password: 'password123', name: 'John Doe' },
];

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user in the database
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Return success response
        res.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
    } else {
        // Return error response
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
});

// Register endpoint
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = users.some(u => u.email === email);

    if (userExists) {
        return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create new user
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
    };

    // Add new user to the database
    users.push(newUser);

    // Return success response
    res.json({ success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } });
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});