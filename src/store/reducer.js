import { combineReducers } from 'redux';

import episodesReducer from './episodes';
import showsReducer from './shows';

// Combining episodes and shows reducers into one.
export default combineReducers({
  episodes: episodesReducer,
  shows: showsReducer,
});
