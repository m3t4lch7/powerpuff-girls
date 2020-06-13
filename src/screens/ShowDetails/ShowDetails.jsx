import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getShowDetails, loadShows } from '../../store/shows';

import Cover from '../../components/Cover/Cover';
import Episodes from '../../components/Episodes/Episodes';
import Genres from '../../components/Genres/Genres';
import Summary from '../../components/Summary/Summary';
import Title from '../../components/Title/Title';

import PageNotFound from '../PageNotFound/PageNotFound';

import './style.scss';

/**
 * Shows a few details of a show with a given id.
 *
 * @param {Object} params - includes episode and show id url
 *
 * @returns {*}
 */
const ShowDetails = ({ match: { params } = {} }) => {
  const dispatch = useDispatch();
  const show = useSelector(getShowDetails(params.showId));

  // Load shows from the API
  useEffect(() => {
    dispatch(loadShows());
  }, []);

  if (!show) {
    return <PageNotFound />;
  }

  return (
    <div className="ShowDetails">
      <Cover cover={show.image} />
      <Title title={show.name} />
      <Summary summary={show.summary} />
      <Genres genres={show.genres} />
      <Episodes showId={params.showId} />
    </div>
  );
};

ShowDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      showId: PropTypes.string,
    }),
  }).isRequired,
};

export default ShowDetails;
