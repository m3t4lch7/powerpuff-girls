import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const url = process.env.EPISODES_URL;

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
