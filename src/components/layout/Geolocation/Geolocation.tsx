import React from 'react'
/* STYLES */
import { Wrapper } from './Geolocation.style'

type Props = {
  handleLocation: () => void
}

const Geolocation: React.FC<Props> = ({handleLocation}) => {
  return (
      <Wrapper onClick={handleLocation}>
        <i className="fas fa-map-marker-alt"/>
      </Wrapper>
  )
}

export default Geolocation
