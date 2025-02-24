import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'; // Import CheckoutForm (we will create this next)

const stripePromise = loadStripe('your-publishable-key-here'); // Add your Stripe publishable key here

const PaymentForm = () => {
  const [clientSecret, setClientSecret] = useState('');

  // Call backend to get client secret (we will implement backend later)
  const createPaymentIntent = async () => {
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 1000 }), // Set amount based on cart total
    });
    const data = await response.json();
    setClientSecret(data.clientSecret);
  };

  React.useEffect(() => {
    createPaymentIntent();
  }, []);

  return (
    <div>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PaymentForm;
