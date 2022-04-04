import { InputProps, InputStyleProps } from '../types/form';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display:block;
  margin-bottom:0.625rem;
`

const StyledInput = styled.input<Pick<InputProps, 'isValid'>>`
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
  ${(props) => props.isValid && `
        border: 1px solid #E26F6F;
    `}

`


const LabeledInput = ({ label, register, type, name, isValid }: InputProps) => {

  return (
    <>
      <StyledLabel >{name}</StyledLabel>
      <StyledInput {...register(label, { required: 'Обязательное поле' })} type={type} isValid={isValid} />

    </>
  )
}

export default LabeledInput