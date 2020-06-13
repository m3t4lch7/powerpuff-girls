import React from 'react';

const Summary = ({ summary }) => {
  return (
    <div className="Summary">
      <div>Summary:</div>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default Summary;
