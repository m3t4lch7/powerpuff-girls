import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './style.scss';

const NavBar = () => (
  <Link className="NavBar" to="/">
    <Logo />
    <div className="NavBar__title">
      Best TV Series
    </div>
  </Link>
);

export default NavBar;
