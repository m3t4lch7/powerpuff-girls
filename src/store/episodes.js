import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';

const url = process.env.REACT_APP_EPISODES_URL;

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
  }
});

export const { episodesRequested, episodesReceived, episodesRequestFailed } = slice.actions;

export default slice.reducer;

export const loadEpisodes = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: episodesRequested.type,
      onSuccess: episodesReceived.type,
      onError: episodesRequestFailed.type
    }),
  );
};

export const getEpisodes = createSelector(
  state => state.episodes,
);
