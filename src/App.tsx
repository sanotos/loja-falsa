import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLoginPage from './pages/HomeLoginPage';
import ProductList from './pages/ProductList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLoginPage />} />
        <Route path="/home" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;