import React from 'react'
/* TYPES */
import { WeatherItemType } from '../../types/weatherItem.type'
/* STYLES */
import { Wrapper } from './WeatherItem.style'
/* UTILS */
import {formatDate, formatTemperature} from '../../utils/format'

type Props = {
  weatherItem: WeatherItemType;
}

const WeatherItem: React.FC<Props> = ({weatherItem}) => {
  return (
    <Wrapper>
      <small>{weatherItem.cloud}</small>
      <h1>{formatTemperature(weatherItem.main.temp)}</h1>
    </Wrapper>
  )
}

export default WeatherItem
