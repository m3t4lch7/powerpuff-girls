import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShowDetails, loadShows } from '../../store/shows';
import { loadEpisodes } from '../../store/episodes';

const ShowDetails = ({ match: { params } = {} }) => {
  const dispatch = useDispatch();
  const show = useSelector(getShowDetails(params.showId));

  useEffect(() => {
    dispatch(loadShows());
    dispatch(loadEpisodes(params.showId));
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div>
      <div>{show.name}</div>
      <img alt="cover_image" src={show.image.original} />
      <div>
        <div>Genres:</div>
        <div>
          {show.genres.map((genre, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>{genre}</div>
          ))}
        </div>
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <div>
        <div>Summary:</div>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      </div>
      <div>
        <div>Episodes:</div>
        <div></div>
      </div>
    </div>
  );
};

export default ShowDetails;
