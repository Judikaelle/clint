import React, { useState } from 'react'
/* API */
import { getWeather } from './api/api'
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

const App = () => {
  const [query, setQuery] = useState<string>('')
  const [weatherArray, setWeatherArray] = useState<WeatherItemType[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleSearch = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (query === '') {
        setError('You need to search something 😁')
        setWeatherArray([])
        return
      }
      try {
        setIsLoading(true)
        const result = await getWeather(query)
        if (result.cod === '404') {
          setIsLoading(false)
          setWeatherArray([])
          setError(result.message + ' 😢')
          return
        }
        result.list.length = 10
        setWeatherArray(result.list)
        setQuery('')
        setError('')
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        console.error(e)
      }
    }
  }

  return (
    <Wrapper>
      <Tooltip/>
      <SearchBar query={query}
                 handleSearch={handleSearch}
                 setQuery={setQuery}/>
      {isLoading && <Loader/>}
      {error && <Error text={error}/>}
      {weatherArray && <WeatherGrid weatherArray={weatherArray}/>}
    </Wrapper>
  )
}

export default App
