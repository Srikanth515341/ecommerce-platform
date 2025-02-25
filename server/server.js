const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');  // Import users route
const productsRoutes = require('./routes/products');  // Import products route
const cartRoutes = require('./routes/cartRoutes');  // Import the cart routes

const app = express(); // Initialize express app

app.use(express.json());  // Middleware to parse JSON requests
app.use(cors());  // Enable CORS

// Use the routes
app.use('/api', usersRoutes);  // All user routes will be prefixed with /api
app.use('/api', productsRoutes);  // All product routes will be prefixed with /api
app.use('/api', cartRoutes);  // Use the cart routes for `/api/cart`

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
