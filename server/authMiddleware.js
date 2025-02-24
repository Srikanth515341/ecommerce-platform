const { verifyToken } = require('./authUtils'); // Import JWT utility

// Middleware to verify JWT token
const protect = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    const decoded = verifyToken(token.split(' ')[1]); // Get token from Authorization header (Bearer <token>)
    req.user = decoded; // Attach the decoded user data to the request
    next(); // Move to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = protect;
