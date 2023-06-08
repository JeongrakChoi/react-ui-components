import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Main from './pages/main/Main';

import HomeRoutes from './routes/HomeRoutes';

import './assets/scss/ui.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home/main" replace />} />
          <Route path="/home/*" element={<HomeRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
