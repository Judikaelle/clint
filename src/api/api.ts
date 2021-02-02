import { WeatherItemType } from '../types/weather-item.type'

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY
const BASE_URL = process.env.REACT_APP_OPEN_WEATHER_BASE_URL

export const getWeather = async (search: string): Promise<WeatherItemType> =>
  await (await fetch(`${BASE_URL}&q=${search}&appid=${API_KEY}`)).json()
