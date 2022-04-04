import React from 'react'
import styled from 'styled-components';
import { ReactChildrenProp } from '../types/props';

const StyledTypography = styled.p`
  font-size:2.5rem;
`

const Typography = (props: ReactChildrenProp) => {
  return (
    <StyledTypography {...props} />
  )
}

export default Typography