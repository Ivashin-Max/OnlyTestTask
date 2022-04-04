import React from 'react'
import { ReactChildrenProp } from '../types/props';
import styled from 'styled-components';
import FlexWrapper from './FlexWrapper';

const StyledErrorMessage = styled.div`
  height:3.75rem;
  background: #F5E9E9;
  border: 1px solid #E26F6F;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border-radius: 8px;
  padding:1.25rem;
  font-weight:400;
  margin-bottom:1.687rem;

`
const StyledErrorIcon = styled.span`
  display:inline-flex;
  justify-content:center;
  align-items:center;
  width: 1.25rem;
  height: 1.25rem;
  background: #FFC8C8;
  border-radius:50%;
  color:#EE6565;
  font-weight:normal;
  margin-right:0.875rem;
`

const ErrorMessage = (props: ReactChildrenProp) => {
  return (
    <StyledErrorMessage>
      <FlexWrapper align='center'>
        <StyledErrorIcon>!</StyledErrorIcon> {props.children}
      </FlexWrapper>
    </StyledErrorMessage>
  )
}

export default ErrorMessage