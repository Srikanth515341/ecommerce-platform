const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');  // Import users route
const productsRoutes = require('./routes/products');  // Import products route

const app = express();
app.use(express.json());  // Middleware to parse JSON requests
app.use(cors());  // Enable CORS

// Use the routes
app.use('/api', usersRoutes);  // All user routes will be prefixed with /api
app.use('/api', productsRoutes);  // All product routes will be prefixed with /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
