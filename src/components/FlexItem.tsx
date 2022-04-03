import React from 'react';
import styled from 'styled-components';
import { FlexItemProps } from '../types/flex';

const StyledFlexItem = styled.div<FlexItemProps>`
  align-self:${props => props.alignSelf || 'flex-start'};
`

const FlexItem = (props: FlexItemProps) => {
  return (
    <StyledFlexItem {...props} />
  )
}

export default FlexItem