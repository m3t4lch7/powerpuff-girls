import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

/**
 * Shows show or episode cover image in multiple sizes.
 *
 * @param {Object} cover - cover object passed from the API
 *
 * @param {boolean|string} small - enable small cover image
 * @param {boolean|string} medium - enable medium cover image
 *
 * If no property was passed, then the cover will be displayed full page.
 *
 * @returns {null|*}
 */
const Cover = ({ cover, small = '', medium = '' }) => {
  // Apply small or medium cover styling
  const sizeStyling = (small && ' Cover--small') || (medium && ' Cover--medium');

  if (!cover.original) {
    return null;
  }

  return (
    <div className={`Cover${sizeStyling}`}>
      <img className="Cover__image" alt="cover_image" src={cover.original} />
    </div>
  );
};

Cover.defaultProps = {
  small: '',
  medium: '',
};

Cover.propTypes = {
  cover: PropTypes.shape({
    original: PropTypes.string,
  }).isRequired,
  small: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  medium: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

export default Cover;
