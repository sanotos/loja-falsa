import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLoginPage from '../pages/HomeLoginPage';
import ProductList from '../pages/ProductList';
import ProductDetails from '../pages/ProductDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLoginPage />} />
        <Route path="/home" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/" element={<HomeLoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;