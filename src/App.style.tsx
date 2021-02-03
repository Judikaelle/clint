import styled from 'styled-components'

export const Wrapper = styled.div`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  border-radius: 2rem;
  display: flex;
  padding: 5rem;
  flex-direction: column;
  align-items: center;
  height: 98vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`
