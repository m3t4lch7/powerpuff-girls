import React from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import configureStore from './store/configureStore';

// Navigation
import NavBar from './components/NavBar/NavBar';

// Details pages
import EpisodeDetails from './screens/EpisodeDetails/EpisodeDetails';
import ShowDetails from './screens/ShowDetails/ShowDetails';

// Other
import PageNotFound from './screens/PageNotFound/PageNotFound';

// Style
import './App.style.scss';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <NavBar />
          <Switch>
            <Route component={ShowDetails} path="/shows/:showId" exact />
            <Route component={EpisodeDetails} path="/shows/:showId/episodes/:episodeId" exact />
            <Route path="/" exact>
              {/* Making sure we get redirected to the correct page right after we run the project */}
              <Redirect to={`/shows/${process.env.REACT_APP_SHOW_POWERPUFF_GIRLS_ID}`} />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
