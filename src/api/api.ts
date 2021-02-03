import { WeatherType } from '../types/weather.type'

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY
const BASE_URL = process.env.REACT_APP_OPEN_WEATHER_BASE_URL

export const getWeatherWithInput = async (search: string): Promise<WeatherType> =>
  await (await fetch(`${BASE_URL}&q=${search}&appid=${API_KEY}`)).json()

export const getWeatherWithLocation = async (latitude: number, longitude :number) : Promise<WeatherType> =>
  await (await fetch(`${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)).json()
