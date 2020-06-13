import React from 'react';
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

export default EpisodesList;
