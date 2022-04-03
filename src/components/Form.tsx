import React from 'react'
import { Path, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import { IFormValues } from '../types/form';
import Button from './Button';
import Checkbox from './Checkbox';
import FlexWrapper from './FlexWrapper';
import LabeledInput from './LabeledInput';



const StyledForm = styled.form`
  max-width:40rem;
  height:21.125rem;
`


const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormValues>(
    {
      mode: 'onBlur'
    }
  );

  const onSubmit: SubmitHandler<IFormValues> = data => {
    alert(JSON.stringify(data));
  };


  return (

    <StyledForm onSubmit={handleSubmit(onSubmit)}>



      <LabeledInput label='login' type='text' register={register} name="Логин" required />
      {errors.login && <p>{errors.login.message}</p>}
      <LabeledInput label='password' type='password' register={register} name="Пароль" required />
      {errors.login && <p>{errors.login.message}</p>}
      <Checkbox label='savePassword' register={register} name="Запомнить пароль" />
      <button onClick={() => console.log(errors)}>sdfsdf</button>
      <Button name='Войти' />
    </StyledForm>

  )
}

export default Form