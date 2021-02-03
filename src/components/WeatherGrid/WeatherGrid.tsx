import React from 'react'
/* TYPES */
import { WeatherItemType } from '../../types/weatherItem.type'
/* STYLES */
import { Wrapper } from './WeatherGrid.style'
/* COMPONENTS */
import WeatherItem from '../WeatherItem/WeatherItem'

type Props = {
  weatherArray: WeatherItemType[];
}

const WeatherGrid: React.FC<Props> = ({weatherArray}) => {
  return (
    <Wrapper>
      {weatherArray?.map(weatherItem => <WeatherItem weatherItem={weatherItem} key={weatherItem.dt}/>)}
    </Wrapper>
  )
}

export default WeatherGrid
