import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getEpisodes, loadEpisodes } from '../../store/episodes';

import EpisodesList from '../EpisodesList/EpisodesList';
import Cover from '../Cover/Cover';

import './style.scss';

const Episodes = ({ showId }) => {
  const dispatch = useDispatch();
  const episodes = useSelector(getEpisodes);

  useEffect(() => {
    dispatch(loadEpisodes(showId));
  }, []);

  return (
    <div className="Episodes">
      <h2 className="Episodes__title">Episodes:</h2>
      <div className="Episodes__list">
        <EpisodesList episodes={episodes} showId={showId} />
      </div>
    </div>
  );
};

export default Episodes;
