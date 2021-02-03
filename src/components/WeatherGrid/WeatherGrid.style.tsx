import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 1740px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr)
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr)
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr)
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-row-gap: .5rem;
  }

`
