import React from 'react'
import styled from 'styled-components';
import { FlexWraperProps } from '../types/props';


const StyledFlexWrapper = styled.section<FlexWraperProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content:${({ justify }) => justify || 'stretch'};
  align-items:${({ align }) => align || 'stretch'};

`

const FlexWrapper: React.FC<FlexWraperProps> = (props) => {
  return (
    <StyledFlexWrapper {...props} />
  )
}

export default FlexWrapper