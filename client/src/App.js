import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProductListPage from './ProductListPage';
import ProductDetailPage from './ProductDetailPage';
import Cart from './Cart';
import CheckoutPage from './CheckoutPage'; // Import CheckoutPage

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Add Checkout route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
