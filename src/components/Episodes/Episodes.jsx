import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getEpisodes, loadEpisodes } from '../../store/episodes';

import Cover from '../Cover/Cover';

const Episodes = ({ showId }) => {
  const dispatch = useDispatch();
  const episodes = useSelector(getEpisodes);

  useEffect(() => {
    dispatch(loadEpisodes(showId));
  }, []);

  return (
    <div className="Episodes">
      <div className="Episodes__title">Episodes:</div>
      <div className="Episodes__list">
        {episodes.map((episode, index) => (
            <div className="Episode__list-item" key={index}>
              <Link to={`/shows/${showId}/episodes/${episode.id}`}>
                <Cover cover={episode.image} small />
                <div className="Episode__list-item-title">{episode.name}</div>
              </Link>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Episodes;
