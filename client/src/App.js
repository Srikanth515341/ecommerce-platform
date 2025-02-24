import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import for v6
import HomePage from './HomePage';
import ProductListPage from './ProductListPage';
import ProductDetailPage from './ProductDetailPage';
import Cart from './Cart'; // Import Cart page

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
