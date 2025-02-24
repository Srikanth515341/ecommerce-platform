import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import for v6
import HomePage from './HomePage';
import ProductListPage from './ProductListPage';
import ProductDetailPage from './ProductDetailPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define routes with the new syntax in React Router v6 */}
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/products" element={<ProductListPage />} /> {/* Product List Page */}
          <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Product Detail Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
