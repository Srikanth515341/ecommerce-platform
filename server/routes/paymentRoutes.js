const express = require('express');
const Stripe = require('stripe');
const stripe = Stripe('your-secret-key-here'); // Your Stripe secret key

const router = express.Router();

// Create PaymentIntent
router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
