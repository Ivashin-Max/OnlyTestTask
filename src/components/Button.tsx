import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../types/props';

const StyledButton = styled.button`
    display:block;
    
    height:3.75rem;
    cursor: pointer;
    border-radius: 8px;
    border:0;
    color: white;
    font-size: 1.125rem;
    font-weight:bold;
    margin-top:2.5rem;

    ${(props: ButtonProps) => props.primary && `
      width:100%;
      background: #4A67FF;
    `}

    ${(props: ButtonProps) => props.secondary && `
      width:12.5rem;
      background: #F5F5F5;
      color:black;
    `}

    &:disabled{
      background: rgba(153, 169, 255, 1);
      cursor: default;
    }

`

const Button = (props: ButtonProps) => {
  return (
    <StyledButton type='submit' {...props}>{props.children}</StyledButton>
  )
}

export default Button