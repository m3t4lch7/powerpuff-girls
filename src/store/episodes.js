import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';

const showUrl = process.env.REACT_APP_SHOWS_URL;
const url = process.env.REACT_APP_EPISODES_URL;

// Reducers
const slice = createSlice({
  name: "episodes",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    episodesRequested: (episodes, action) => {
      episodes.loading = true;
    },

    episodesReceived: (episodes, action) => {
      episodes.list = action.payload;
      episodes.loading = false;
    },

    episodesRequestFailed: (episodes, action) => {
      episodes.loading = false;
    },

    episodeDetailsRequested: (episodes, action) => {
      episodes.loading = true;
    },

    episodeDetailsReceived: (episodes, action) => {
      episodes.list = [action.payload];
      episodes.loading = false;
    },

    episodeDetailsRequestFailed: (episodes, action) => {
      episodes.loading = false;
    },
  }
});

// Actions
export const {
  episodesRequested,
  episodesReceived,
  episodesRequestFailed,
  episodeDetailsRequested,
  episodeDetailsReceived,
  episodeDetailsRequestFailed
} = slice.actions;

export const loadEpisodes = (showId) => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url:  `${showUrl}/${showId}${url}`,
      onStart: episodesRequested.type,
      onSuccess: episodesReceived.type,
      onError: episodesRequestFailed.type
    }),
  );
};

export const loadEpisodeDetails = (showId, episodeId) => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url:  `${url}/${episodeId}`,
      onStart: episodeDetailsRequested.type,
      onSuccess: episodeDetailsReceived.type,
      onError: episodeDetailsRequestFailed.type
    }),
  );
};

// Selectors
export const getEpisodes = createSelector(
  state => state.episodes,
  (episodes) => episodes.list
);

export const getEpisodeDetails = id => createSelector(
  state => state.episodes,
  (episodes) => episodes.list.find(episode => episode.id === parseInt(id))
);

export default slice.reducer;
