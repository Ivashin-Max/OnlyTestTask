import React from 'react'
import styled from 'styled-components';
import { TitleProps } from '../types/props';


const StyletTitle = styled.h1<TitleProps>`
  font-size:4rem;
  text-align:center;
  text-transform:${({ textTransform }) => textTransform || 'none'};
`

const Title = (props: TitleProps) => {
  return (
    <StyletTitle {...props} />
  )
}

export default Title