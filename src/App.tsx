import React from 'react';

import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Main from './pages/main/Main';

import './assets/scss/ui.scss';

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
