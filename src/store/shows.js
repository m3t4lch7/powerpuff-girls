import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';

const url = process.env.REACT_APP_SHOWS_SEARCH_GIRLS_URL;

// Reducers
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
      // const showsNew = action.payload.map(({show}) => {
      //   return show;
      // });

      // let showsNew = [];
      // action.payload.forEach(function(show) {
      //   showsNew[show.show.id] = show.show;
      // });
      //
      // console.log(showsNew);

      shows.list = action.payload.map(({show}) => {
        return show;
      });

      shows.loading = false;
    },

    showsRequestFailed: (shows, action) => {
      shows.loading = false;
    },
  }
});

// Actions
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

export const getShows = createSelector(
  state => state.shows,
  (shows) => shows.list
);

export const getShowDetails = id => createSelector(
  state => state.shows,
  (shows) => shows.list.find(show => show.id === parseInt(id))
);

export default slice.reducer;
