import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Lnb from '../components/layout/Lnb';

import Main from '../pages/main/Main';

const HomeRoutes = () => {
  return (
    <>
      <Lnb />
      <Routes>
        <Route path="main" element={<Main />}></Route>
      </Routes>
    </>
  );
};

export default HomeRoutes;
