import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link, NavLink } from 'react-router-dom';

const Lnb = () => {
  const handleLinkClick = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="lnb">
      <h1>REACT UI COMPONENTS</h1>
      <ul>
        <li>
          <button onClick={() => handleLinkClick('button')}>Button</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('input')}>Input</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('radio')}>Radio</button>
        </li>
      </ul>
    </nav>
  );
};

export default Lnb;
