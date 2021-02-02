import React, { useState } from 'react'
/* API */
import { getWeather } from './api/api'
/* TYPES */
import { WeatherItemType } from './types/weather-item.type'
/* STYLES */
import { Wrapper } from './App.style'
/* COMPONENTS */
import SearchBar from './components/layout/SearchBar/SearchBar'
import Loader from './components/layout/Loader/Loader'

const App = () => {
  const [query, setQuery] = useState<string>('')
  const [weather, setWeather] = useState<WeatherItemType>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<object | null>(null)

  const formatDate = () => {
    let date = String(new window.Date())
    date = date.slice(3, 15)
    return date
  }

  const handleSearch = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      try {
        setIsLoading(true)
        const result = await getWeather(query)
        setWeather(result)
        setQuery('')
        setIsLoading(false)
      } catch (e) {
        setError(e)
        console.error(e)
      }
    }
  }

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {error && <div>Something went wrong..</div>}
      <SearchBar query={query}
                 handleSearch={handleSearch}
                 setQuery={setQuery}/>
      {weather && (
        <div>
          <div className="location-container">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date"> {formatDate()}</div>
          </div>
          <div className="weather-container">
            <div className="temperature">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      )}
    </Wrapper>
  )
}

export default App
