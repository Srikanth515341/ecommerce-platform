// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ProductListPage from './ProductListPage';
import ProductDetailPage from './ProductDetailPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={ProductListPage} />
          <Route path="/product/:id" component={ProductDetailPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
