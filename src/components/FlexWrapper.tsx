import React from 'react'
import styled from 'styled-components';
import { FlexWraperProps } from '../types/flex';


const StyledFlexWrapper = styled.section<FlexWraperProps>`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content:${({ justify }) => justify || 'stretch'};
  align-items:${({ align }) => align || 'stretch'};
  width:100%;
  /* height:100%; */
`

const FlexWrapper: React.FC<FlexWraperProps> = (props) => {
  return (
    <StyledFlexWrapper {...props} />
  )
}

export default FlexWrapper