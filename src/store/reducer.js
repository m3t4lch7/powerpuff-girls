import { combineReducers } from 'redux';

// eslint-disable-next-line import/no-named-as-default
import episodesReducer from './episodes';
// eslint-disable-next-line import/no-named-as-default
import showsReducer from './shows';

export default combineReducers({
  episodes: episodesReducer,
  shows: showsReducer,
});
