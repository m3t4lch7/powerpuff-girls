import React from 'react';
import { Link } from 'react-router-dom';

import Cover from '../Cover/Cover';

import './style.scss';

// 45: {id: 160223, url: "http://www.tvmaze.com/episodes/160223/the-powerpuff-girls-4x07-nano-of-the-north",…}
// airdate: "2002-06-22"
// airstamp: "2002-06-22T16:00:00+00:00"
// airtime: ""
// id: 160223
// image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/238/596351.jpg",…}
// name: "Nano of the North"
// number: 7
// runtime: 30
// season: 4
// summary: "<p>"Nano of the North" It's raining in Townsville, but this is more than just rain. These drops are really microscopic robots tearing apart the city and the Girls must fight with these creatures on their own level. </p>"
// url: "http://www.tvmaze.com/episodes/160223/the-powerpuff-girls-4x07-nano-of-the-north"

const EpisodesList = ({ episodes, showId }) => (
  episodes.map((episode, index) => (
    <div className="EpisodesList" key={index}>
      <Link to={`/shows/${showId}/episodes/${episode.id}`}>
        <div className="EpisodesListw__cover">
          <Cover cover={episode.image} small />
        </div>
        <div className="EpisodesList__content">
          <div className="EpisodesList__content-title">{episode.name}</div>
          <div className="EpisodesList__content-aired-at">{episode.airdate}</div>
          <div className="EpisodesList__content-season">Season: {episode.season}</div>
        </div>
      </Link>
    </div>
  ))
);

export default EpisodesList;
