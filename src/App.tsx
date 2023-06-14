import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomeRoutes from './routes/HomeRoutes';

import './assets/scss/ui.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
