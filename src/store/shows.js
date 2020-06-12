import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const url = process.env.SHOWS_URL;

const slice = createSlice({
  name: "shows",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    showsRequested: (shows, action) => {
      shows.loading = true;
    },

    showsReceived: (shows, action) => {
      shows.list = action.payload;
      shows.loading = false;
    },

    showsRequestFailed: (shows, action) => {
      shows.loading = false;
    },
  }
});

export const { showsRequested, showsReceived, showsRequestFailed } = slice.actions;

export const loadShows = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: showsRequested.type,
      onSuccess: showsReceived.type,
      onError: showsRequestFailed.type
    }),
  );
};
