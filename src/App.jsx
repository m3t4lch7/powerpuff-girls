import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Shows from './screens/Shows/Shows';
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
          <Route component={Shows} path="/" exact />
          <Route component={ShowDetails} path="/shows/:id" exact />
          <Route component={EpisodeDetails} path="/episodes/:id" exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
