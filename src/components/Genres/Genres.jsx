import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Genres = ({ genres }) => {
  return (
    <div className="Genres">
      {genres.map((genre, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="Genres__item">{genre}</div>
      ))}
    </div>
  );
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Genres;
