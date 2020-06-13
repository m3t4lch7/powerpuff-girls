import React from 'react';

import './style.scss';

const Summary = ({ summary }) => {
  return (
    <div className="Summary">
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default Summary;
