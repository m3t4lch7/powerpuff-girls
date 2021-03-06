import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getEpisodeDetails, loadEpisodeDetails } from '../../store/episodes';

import Cover from '../../components/Cover/Cover';
import PageNotFound from '../PageNotFound/PageNotFound';
import Summary from '../../components/Summary/Summary';
import Title from '../../components/Title/Title';

import './style.scss';

/**
 * Shows a few details of an episode with a given id.
 *
 * @param {Object} params - includes episode and show ids from the url
 *
 * @returns {*}
 */
const EpisodeDetails = ({ match: { params } = {} }) => {
  const dispatch = useDispatch();
  const episode = useSelector(getEpisodeDetails(params.episodeId));

  // Load specific episode based on show and episode id
  useEffect(() => {
    dispatch(loadEpisodeDetails(params.showId, params.episodeId));
  }, []);

  if (!episode) {
    return <PageNotFound />;
  }

  return (
    <div className="EpisodeDetails">
      <Cover cover={episode.image} medium />
      <Title title={episode.name} />
      <Summary summary={episode.summary} />
    </div>
  );
};

EpisodeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      episodeId: PropTypes.string,
      showId: PropTypes.string,
    }),
  }).isRequired,
};

export default EpisodeDetails;
