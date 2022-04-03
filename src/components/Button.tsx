import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../types/form';

const StyledButton = styled.button`
    display:block;
    width:100%;
    height:3.75rem;
    background: #4A67FF;
    border-radius: 8px;
    border:0;
    color: white;
    font-size: 1.125rem;
    font-weight:bold;
    margin-top:2.5rem;
`

const Button = (props: ButtonProps) => {
  return (
    <StyledButton type='submit'>{props.name}</StyledButton>
  )
}

export default Button