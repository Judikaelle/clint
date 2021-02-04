import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  height: 5rem;
  transition: all 0.5s ease;

  input {
    background-color: #fff;
    border: 0;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    padding: 1.5rem;
    height: 5rem;
    width: 5rem;
    letter-spacing: .4rem;
    transition: all .5s ease;
    box-shadow: 10px 10px 26px 0 rgba(0,0,0,0.27);
    -webkit-box-shadow: 10px 10px 26px 0 rgba(0,0,0,0.27);
    -moz-box-shadow: 10px 10px 26px 0 rgba(0,0,0,0.27);
  }

  button {
    background-color: #fff;
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 2.4rem;
    position: absolute;
    top: 0;
    left: 0;
    height: 5rem;
    width: 5rem;
    transition: all .5s ease;
  }

  button:focus, input:focus {
    outline: none;
  }

  &.active {
    margin-left: -5rem;
  }

  &.active input {
    width: 20rem;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  &.active button {
    transform: translateX(19.8rem);
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  @media (max-width: 540px) {
    & input {
      height: 4rem;
      font-size: 1.3rem;
    }
    
    & button {
      width: 4rem;
      height: 4rem;
      font-size: 2rem;
      padding-left: 0.8rem;
    }
    
    &.active input {
      width: 12rem;
    }

    &.active button {
      transform: translateX(11.8rem);
    }
    
  }
`
