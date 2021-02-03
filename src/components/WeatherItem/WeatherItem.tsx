import React from 'react'
/* TYPES */
import { WeatherItemType } from '../../types/weatherItem.type'
/* STYLES */
import { Wrapper } from './WeatherItem.style'
/* UTILS */
import { formatDate, formatTemperature } from '../../utils/format'

type Props = {
  weatherItem: WeatherItemType;
}

const WeatherItem: React.FC<Props> = ({weatherItem}) => {
  return (
    <Wrapper className={weatherItem.weather[0].main.toLowerCase()}>
      <div className="filter">
        <div className="flex">
          <div className="left__side">
            <small>
              {weatherItem.weather[0].main}
            </small>
            <h1>{formatTemperature(weatherItem.main.temp)}</h1>
            <small>{formatTemperature(weatherItem.main.temp_min)} / {formatTemperature(weatherItem.main.temp_max)}</small>
          </div>
          <div className="right__side">
            <h4>{formatDate(weatherItem.dt).hours}:{formatDate(weatherItem.dt).minutes}</h4>
            <h6>{formatDate(weatherItem.dt).fullDate}</h6>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default WeatherItem
