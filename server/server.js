const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes'); // Import payment routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use the payment routes
app.use('/create-payment-intent', paymentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
