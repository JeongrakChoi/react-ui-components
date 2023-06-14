import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Lnb from '../components/layout/Lnb';

import Home from '../pages/Home';

const HomeRoutes = () => {
  return (
    <>
      <Lnb />
      <Routes>
        {/* <Route path="home" element={<Home />}></Route> */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default HomeRoutes;
