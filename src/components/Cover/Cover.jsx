import React from 'react';

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

export default Cover;
