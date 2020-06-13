import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Cover = ({ cover, small = '', medium = '' }) => {
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
