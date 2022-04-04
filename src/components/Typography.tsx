import React from 'react'
import styled from 'styled-components';
import { TypographyProps } from '../types/props';

const StyledTypography = styled.p`
  font-size:2.5rem;
`

const Typography = (props: TypographyProps) => {
  return (
    <StyledTypography {...props} />
  )
}

export default Typography