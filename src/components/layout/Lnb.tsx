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
      <ul>
        <li>
          <button onClick={() => handleLinkClick('con01')}>con01</button>
        </li>
        <li>
          <button onClick={() => handleLinkClick('con02')}>con02</button>
        </li>
      </ul>
    </nav>
  );
};

export default Lnb;
