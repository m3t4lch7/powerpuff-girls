import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './style.scss';

/**
 * Displays sticky navigation on the top of the screen.
 *
 * @returns {*}
 */
const NavBar = () => (
  <Link className="NavBar" to="/">
    <Logo />
    <div className="NavBar__title">
      Best TV Series
    </div>
  </Link>
);

export default NavBar;
