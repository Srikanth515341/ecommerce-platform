import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css';
import App from './App';
import { CartProvider } from './CartContext'; // Import CartProvider

// Create a root element for ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App wrapped with CartProvider
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
