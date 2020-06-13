import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ShowDetails from './screens/ShowDetails/ShowDetails';
import EpisodeDetails from './screens/EpisodeDetails/EpisodeDetails';

import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to={`/shows/${process.env.REACT_APP_SHOW_POWERPUFF_GIRLS_ID}`} />
          </Route>
          <Route component={ShowDetails} path="/shows/:showId" exact />
          <Route component={EpisodeDetails} path="/shows/:showId/episodes/:episodeId" exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
