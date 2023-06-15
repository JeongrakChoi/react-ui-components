import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/layout/Header';
import Lnb from '../components/layout/Lnb';

import Home from '../pages/Home';

const HomeRoutes = () => {
  return (
    <>
      <Header />
      <Lnb />
      <Routes>
        {/* <Route path="home" element={<Home />}></Route> */}
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default HomeRoutes;
