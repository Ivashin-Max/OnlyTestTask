import { useState } from 'react';
import { InputProps, LabelProps } from '../types/props';
import styled from 'styled-components';
import FlexWrapper from './FlexWrapper';

const StyledLabel = styled.label<LabelProps>`
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #000000;
  border-radius: 4px;
  padding:3px;
  background-color: ${props => props.checked ? '#4A67FF' : 'white'};
  background-clip: content-box;
  margin-right:0.875rem;
`
const StyledCheckbox = styled.input`
  width:0px;
  height:0px;
`



const Checkbox = ({ label, register, required, name }: InputProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      <FlexWrapper align='center'>
        <StyledLabel checked={checked} />
        <StyledCheckbox
          type="checkbox"
          {...register(label, { required })}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{name}</span>
      </FlexWrapper>
    </label>
  )
}

export default Checkbox