import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  Container,
  CurrentTemp,
  DateLabel,
  Icons,
  Label,
  MainIcon,
  Wrapper,
  Header,
  Line,
  WeatherDiv,
  ErrorText,
} from './WeatherStyle';
import * as weather from '../../assets/icons';
import { useFetchWeatherQuery } from '../../services/WeatherService';
import { ILocation } from '../../types';
import axios from 'axios';

const Weather: React.FC = () => {
  const [timer, setTimer] = useState(moment().format('LT'));
  const [period, setPeriod] = useState<string>('hourly');
  const [location, setLocation] = useState<ILocation>();

  useEffect(() => {
    axios
      .get('https://geolocation-db.com/json/')
      .then(geo => {
        setLocation(geo.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTimer(moment().format('LT'));
    }, 60000);
  }, [timer]);

  const { data, isLoading, error } = useFetchWeatherQuery(
    location as ILocation
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  const periodHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(event.currentTarget.value);
  };

  return (
    <Wrapper>
      <Container justifyContent="space-between">
        <Container flexDirection="column" alignItems="flex-start">
          <Header>{`${location?.city}, ${location?.country_name}`}</Header>
          <DateLabel>{moment().format('LL')}</DateLabel>
          <Container flexDirection="column">
            <MainIcon
              src={weather[`${data?.current.weather[0].main}`] || weather.foog}
              alt="Main Icon"
            />
            <DateLabel>{data?.current.weather[0].main}</DateLabel>
          </Container>
        </Container>
        <Container flexDirection="column">
          <CurrentTemp>
            {data ? Math.round(data.current.temp) : '-'}&#176;
          </CurrentTemp>
          <Label>{timer}</Label>
        </Container>
      </Container>
      <Container flexDirection="column" alignItems="flex-start">
        <Container justifyContent="space-between" width="40%">
          <label htmlFor="hourly" className="period-label">
            <input
              id="hourly"
              type="radio"
              value="hourly"
              checked={period === 'hourly'}
              onChange={periodHandler}
            />
            <span>Hourly</span>
          </label>
          <label htmlFor="daily" className="period-label">
            <input
              id="daily"
              type="radio"
              value="daily"
              checked={period === 'daily'}
              onChange={periodHandler}
            />
            <span>Daily</span>
          </label>
          <label htmlFor="details" className="period-label">
            <input
              id="details"
              type="radio"
              value="details"
              checked={period === 'details'}
              onChange={periodHandler}
            />
            <span>Details</span>
          </label>
        </Container>
        <Line />
        <Container width="100%" overflow="scroll" justifyContent="flex-start">
          {period === 'hourly' &&
            data?.hourly.slice(0, 12).map(el => {
              return (
                <WeatherDiv key={el.dt}>
                  <DateLabel>{moment.unix(el.dt).format('LT')}</DateLabel>
                  <Icons
                    src={
                      weather[`${el?.weather[0].main.toLocaleLowerCase()}`] ||
                      weather.foog
                    }
                    alt="Icon"
                  />
                  <Label>{el ? Math.round(el.temp) : '-'}&#176;</Label>
                </WeatherDiv>
              );
            })}
          {period === 'daily' &&
            data?.daily.map(el => {
              return (
                <WeatherDiv key={el.dt}>
                  <DateLabel>{moment.unix(el.dt).format('L')}</DateLabel>
                  <Icons
                    src={
                      weather[`${el?.weather[0].main.toLocaleLowerCase()}`] ||
                      weather.foog
                    }
                    alt="Icon"
                  />
                  <Label>
                    {el
                      ? `${Math.round(el.temp.day)}/${Math.round(
                          el.temp.night
                        )}`
                      : '-'}
                    &#176;
                  </Label>
                </WeatherDiv>
              );
            })}
          {period === 'details' && <ErrorText>No data Found</ErrorText>}
        </Container>
      </Container>
    </Wrapper>
  );
};

export default Weather;
