export type HandleFetchDataType = (city: string) => void;

// Weather data model

export interface WeatherDataType {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  rain?: Rain | null;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

// Forecast data model

export interface ForecastDataType {
  cod: string;
  message: number;
  cnt: number;
  list: ListEntity[];
  city: City;
}
export interface ListEntity {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
  rain?: Rain | null;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Clouds {
  all: number;
}
export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
export interface Sys {
  pod: string;
}
export interface Rain {
  h: number;
}
export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export interface Coord {
  lat: number;
  lon: number;
}
