import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 5rem;
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #fff;
    margin: 35px 5px;
  }

  span:nth-child(1) {
    animation: bounce 1s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation: bounce 1s ease-in-out 0.33s infinite;
  }

  span:nth-child(3) {
    animation: bounce 1s ease-in-out 0.66s infinite;
  }

  @keyframes bounce {
    0%, 75%, 100% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }

    25% {
      -webkit-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }
`
