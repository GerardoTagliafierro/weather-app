import { configureStore } from '@reduxjs/toolkit';
import cityReducer from '../features/CitySlices';

export const store = configureStore({
  reducer: {
    store: cityReducer,
  },
});
