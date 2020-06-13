import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEpisodeDetails, loadEpisodeDetails } from '../../store/episodes';

import Title from '../../components/Title/Title';
import PageNotFound from '../PageNotFound/PageNotFound';
import Cover from '../../components/Cover/Cover';
import Summary from '../../components/Summary/Summary';

import './style.scss';

const EpisodeDetails = ({ match: { params } = {} }) => {
  const dispatch = useDispatch();
  const episode = useSelector(getEpisodeDetails(params.episodeId));

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

export default EpisodeDetails;
