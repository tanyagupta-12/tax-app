import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ amount, onSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);
        setError('');

        // Step 1: Create a Payment Intent on the backend
        const response = await fetch('http://localhost:3001/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }), // Convert to cents
        });

        const { clientSecret } = await response.json();

        // Step 2: Confirm the Payment on the Frontend
        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        setLoading(false);

        if (stripeError) {
            setError(stripeError.message);
        } else if (paymentIntent.status === 'succeeded') {
            onSuccess(); // Call the success handler
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <CardElement className="p-2 border border-gray-300 rounded-lg" />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
                {loading ? 'Processing...' : 'Pay $${amount}'}
            </button>
        </form>
    );
};

export default PaymentForm;