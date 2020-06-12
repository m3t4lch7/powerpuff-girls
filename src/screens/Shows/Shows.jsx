import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getShows, loadShows } from '../../store/shows';

const Shows = () => {
  const dispatch = useDispatch();
  const shows = useSelector(getShows);

  useEffect(() => {
    dispatch(loadShows());
  }, []);

  return (
    <div>
      Test
    </div>
  );
};

export default Shows;
