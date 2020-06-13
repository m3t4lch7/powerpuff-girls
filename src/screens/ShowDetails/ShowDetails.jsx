import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getShowDetails, loadShows } from '../../store/shows';

import Cover from '../../components/Cover/Cover';
import Episodes from '../../components/Episodes/Episodes';
import Genres from '../../components/Genres/Genres';
import Summary from '../../components/Summary/Summary';
import Title from '../../components/Title/Title';

import PageNotFound from '../PageNotFound/PageNotFound';

import './style.scss';

const ShowDetails = ({ match: { params } = {} }) => {
  const dispatch = useDispatch();
  const show = useSelector(getShowDetails(params.showId));

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
      <Genres genres={show.genres} />
      <Summary summary={show.summary} />
      <Episodes showId={params.showId} />
    </div>
  );
};

export default ShowDetails;
