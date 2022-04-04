import { InputProps } from '../types/form';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display:block;
  margin-bottom:0.625rem;
`

const StyledInput = styled.input<any>`
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
  ${(props: InputProps) => props.valid === true && `
      border:1px solid red;
    `}
`


const LabeledInput = ({ label, register, type, name }: InputProps, props: InputProps) => {

  return (
    <>
      <StyledLabel >{name}</StyledLabel>
      <StyledInput {...register(label, { required: 'Обязательное поле' })} type={type || 'text'}{...props} />

    </>
  )
}

export default LabeledInput