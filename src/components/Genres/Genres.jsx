import React from 'react';

const Genres = ({ genres }) => {
  return (
    <div className="Genres">
      <div>Genres:</div>
      <div>
        {genres.map((genre, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>{genre}</div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
