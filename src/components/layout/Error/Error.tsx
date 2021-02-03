import React from 'react'
/* STYLES  */
import { Wrapper } from './Error.style'

type Props = {
  text: string;
}

const Error: React.FC<Props> = ({text}) => {
  return (
    <Wrapper>
      {text}
    </Wrapper>
  )
}

export default Error
