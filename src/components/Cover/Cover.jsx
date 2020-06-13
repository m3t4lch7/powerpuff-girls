import React from 'react';

import './style.scss';

const Cover = ({ cover, small }) => {
  if (!cover.original) {
    return null;
  }

  return (
    <div className={`Cover${small ? ' Cover--small' : ''}`}>
      <img className="Cover__image" alt="cover_image" src={cover.original} />
    </div>
  );
};

export default Cover;
