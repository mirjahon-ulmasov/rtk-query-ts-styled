export interface ILocation {
  IPv4: string;
  city: string;
  latitude: number;
  longitude: number;
  country_code: string;
  country_name: string;
}

export interface IWeather {
  current: {
    dt: number;
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    wind_speed: number;
    weather: { main: string; description: string }[];
  };
  daily: IDailyWeather[];
  hourly: IHourlyWeather[];
}

interface IDailyWeather {
  dt: number;
  humidity: number;
  pressure: number;
  moonrise: number;
  moonset: number;
  sunrise: number;
  sunset: number;
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
  wind_speed: number;
  weather: { main: string; description: string }[];
}

interface IHourlyWeather {
  dt: number;
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  weather: { main: string; description: string }[];
}
