import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Cover from '../Cover/Cover';

import './style.scss';

const EpisodesList = ({ episodes, showId }) => (
  <div className="EpisodesList">
    {episodes.map((episode, index) => (
      <div className="EpisodesList__item" key={index}>
        <Link to={`/shows/${showId}/episodes/${episode.id}`}>
          <div className="EpisodesList__item--cover">
            <Cover cover={episode.image} small />
          </div>
          <div className="EpisodesList__item--content">
            <div className="EpisodesList__item--content-title">{episode.name}</div>
            <div className="EpisodesList__item--content-season">Season: {episode.season}</div>
            <div className="EpisodesList__item--content-aired-at">Aired at: {episode.airdate}</div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

EpisodesList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.shape({
        original: PropTypes.string,
      }),
      name: PropTypes.string,
      season: PropTypes.number,
      airdate: PropTypes.string,
    }),
  ).isRequired,
  showId: PropTypes.string.isRequired,
};

export default EpisodesList;
