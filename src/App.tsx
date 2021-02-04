import React, { useState } from 'react'
/* API */
import { getWeatherWithInput, getWeatherWithLocation } from './api/api'
/* TYPES */
import { WeatherItemType } from './types/weatherItem.type'
/* STYLES */
import { Wrapper } from './App.style'
/* COMPONENTS */
import SearchBar from './components/layout/SearchBar/SearchBar'
import Loader from './components/layout/Loader/Loader'
import Tooltip from './components/layout/Tooltip/Tooltip'
import WeatherGrid from './components/WeatherGrid/WeatherGrid'
import Error from './components/layout/Error/Error'
import Geolocation from './components/layout/Geolocation/Geolocation'
import Heading from './components/layout/Heading/Heading'
/* UTILS */
import { getCoords } from './utils/geolocation'
import { WeatherType } from './types/weather.type'

const App = () => {
  /* useState */
  const [query, setQuery] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [weatherArray, setWeatherArray] = useState<WeatherItemType[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleSearch = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      /* check input */
      if (query === '') {
        setError('You need to search something 😁')
        setWeatherArray([])
        setCity('')
        return
      }
      try {
        setIsLoading(true)
        const result = await getWeatherWithInput(query)
        /* handle errors */
        handleErrors(result)
        result.list.length = 10
        setWeatherArray(result.list)
        setCity(`${result.city.name}, ${result.city.country}`)
        /* clear states */
        setQuery('')
        setError('')
        setIsLoading(false)
      } catch (e) {
        setError('Oops! Something went wrong...')
        setIsLoading(false)
        console.error(e)
      }
    }
  }

  const handleLocation = async () => {
    try {
      setWeatherArray([])
      setCity('')
      setError('')
      setIsLoading(true)
      const {latitude, longitude} = await getCoords()
      console.log(latitude, longitude)
      const result = await getWeatherWithLocation(latitude, longitude)
      /*  handle errors */
      handleErrors(result)
      result.list.length = 10
      setWeatherArray(result.list)
      setCity(`${result.city.name}, ${result.city.country}`)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      setError('Can\'t retrieve coordinates with Geolocation API.')
      console.error(e.message)
    }
  }

  const handleErrors = (result: WeatherType) => {
    if (result.cod !== '200') {
      setIsLoading(false)
      setWeatherArray([])
      setCity('')
      setError(result.message + ' 😢')
      return
    }
  }

  return (
    <Wrapper>
      <Tooltip />
      <SearchBar query={query}
                 handleSearch={handleSearch}
                 setQuery={setQuery}/>
      <Geolocation handleLocation={handleLocation}/>
      {isLoading && <Loader/>}
      {error && <Error text={error}/>}
      <Heading title={city}/>
      {weatherArray && <WeatherGrid weatherArray={weatherArray}/>}
    </Wrapper>
  )
}

export default App
