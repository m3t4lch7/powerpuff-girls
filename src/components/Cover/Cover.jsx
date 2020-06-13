import React from 'react';

const Cover = ({ cover, small }) => {
  if (!cover.original) {
    return null;
  }

  return (
    <div className="Cover">
      <img className={`Cover__image${small ? ' Cover__image-small' : ''}`} alt="cover_image" src={cover.original} />
    </div>
  );
};

export default Cover;
