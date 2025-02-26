import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import InputData from './pages/InputData';
import TaxCalculation from './pages/TaxCalculation';
import Deductions from './pages/Deductions';
import ErrorCheck from './pages/ErrorCheck';
import Filing from './pages/Filing';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import About from './pages/About';
import Privacy from './pages/Privacy';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/input-data" element={<InputData />} />
                <Route path="/tax-calculation" element={<TaxCalculation />} />
                <Route path="/deductions" element={<Deductions />} />
                <Route path="/error-check" element={<ErrorCheck />} />
                <Route path="/filing" element={<Filing />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
              
            </Routes>
        </Router>
    );
}

export default App;
