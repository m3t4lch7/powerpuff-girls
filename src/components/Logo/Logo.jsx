import React from 'react';

import logo from '../../assets/images/logo.png';

import './style.scss';

/**
 * Shows logo in the top left corner.
 *
 * @returns {*}
 */
const Logo = () => (
  <div className="Logo">
    <img alt="logo" src={logo} />
  </div>
);

export default Logo;
