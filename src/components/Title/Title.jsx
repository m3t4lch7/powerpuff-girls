import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

/**
 * Shows title of a show or an episode.
 *
 * @param {string} title
 *
 * @returns {*}
 */
const Title = ({ title }) => (
  <h1 className="Title">
    {title}
  </h1>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
