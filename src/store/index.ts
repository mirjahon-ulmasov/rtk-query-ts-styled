import { configureStore } from '@reduxjs/toolkit';
import { weatherAPI } from '../services/WeatherService';

export const store = configureStore({
  reducer: {
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
