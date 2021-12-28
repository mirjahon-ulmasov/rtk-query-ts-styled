import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILocation, IWeather } from '../types';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: build => ({
    fetchWeather: build.query<IWeather, ILocation>({
      query: location => ({
        url: '/onecall',
        params: {
          lat: location?.latitude || '41.3001594543457',
          lon: location?.longitude || '69.21083068847656',
          exclude: 'minutely',
          appid: '2375a6ec15472c7dc5ed475ab92fed1b',
          units: 'metric',
        },
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchWeatherQuery } = weatherAPI;
