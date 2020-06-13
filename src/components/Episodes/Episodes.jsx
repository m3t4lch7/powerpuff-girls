import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getEpisodes, loadEpisodes } from '../../store/episodes';

import EpisodesList from '../EpisodesList/EpisodesList';

import './style.scss';

/**
 * Shows all episodes related to a show.
 *
 * @param {number} showId
 *
 * @returns {*}
 */
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

Episodes.propTypes = {
  showId: PropTypes.string.isRequired,
};

export default Episodes;
