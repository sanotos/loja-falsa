import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
  </Routes>
);

export default AppRoutes;