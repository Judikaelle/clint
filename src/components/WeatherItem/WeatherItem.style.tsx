import styled from 'styled-components'
/* IMAGES */
import clear from '../../assets/img/clear.jpg'
import clouds from '../../assets/img/clouds.jpg'
import snow from '../../assets/img/snow.jpg'
import rain from '../../assets/img/rain.jpg'

export const Wrapper = styled.div`
  color: #fff;
  background-color: #fff;
  width: 20rem;
  height: 13rem;
  border: none;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: -12px 7px 38px -10px rgba(0, 0, 0, 0.40),
  -12px 7px 94px -10px rgba(0, 0, 0, 0.30),
  -12px 10px 57px -12px rgba(0, 0, 0, 0.20);
  
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 10px 20px;
    height: 100%;
  }

  .filter {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .15);
  }

  h1 {
    font-size: 1.8rem;
  }

  h4 {
    text-align: right;
  }

  h6 {
    text-transform: capitalize;
  }

  .filter {
    position: absolute;
  }

  &.clear {
    background-image: url(${clear});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &.clouds {
    background-image: url(${clouds});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &.rain {
    background-image: url(${rain});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &.snow {
    background-image: url(${snow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`
