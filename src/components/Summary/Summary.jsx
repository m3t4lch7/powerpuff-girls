import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Summary = ({ summary }) => (
  <div className="Summary">
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: summary }} />
  </div>
);

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default Summary;
