import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link, NavLink } from 'react-router-dom';

const Lnb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="lnb">
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Lnb;
