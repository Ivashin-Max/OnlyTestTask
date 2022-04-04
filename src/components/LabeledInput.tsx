import React from 'react';
import { useForm, useController, UseControllerProps } from 'react-hook-form';
import { FormData, FormValues, InputProps, LabeledInputProps } from '../types/form';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display:block;
  margin-bottom:0.625rem;
`

const StyledInput = styled.input`
  width:100%;
  height:3.75rem;
  background: #F5F5F5;
  border-radius: 8px;
  padding:1.25rem;
  font-weight:400;
  color:black;
  outline:none;
  margin-bottom:0.75rem;
  border:none;

`


const LabeledInput = ({ label, register, type, name }: InputProps) => {

  return (
    <>
      <StyledLabel >{name}</StyledLabel>
      <StyledInput {...register(label, { required: 'Обязательное поле' })} type={type ? type : 'text'} />

    </>
  )
}

export default LabeledInput