import React from 'react'
/* STYLES */
import {Wrapper} from './Heading.style'

type Props = {
  title: string;
}

const Heading: React.FC<Props> = ({title}) => {
  return <Wrapper>{title}</Wrapper>
}

export default Heading
