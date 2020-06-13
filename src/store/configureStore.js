import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';

// Configuring store with custom reducers and API middleware
export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      api,
    ],
  });
}
