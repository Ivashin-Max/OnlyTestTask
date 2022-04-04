import React, { useState } from 'react'
import { Path, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { imitateFetch } from '../actions/fetchImitation';
import { IFormValues } from '../types/form';
import Button from './Button';
import Checkbox from './Checkbox';
import ErrorMessage from './ErrorMessage';
import FlexWrapper from './FlexWrapper';
import LabeledInput from './LabeledInput';



const StyledForm = styled.form`
  width:40rem;
  height:21.125rem;
`

const StyledErrorMessage = styled.span`
  display:block;
  color: rgba(226, 111, 111, 1);
  font-size:0.875rem;
  margin:0 0 20px;
  width:100%;
`

const Form = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormValues>();
  const [disabled, setDisabled] = useState(false);
  const [fetchError, setFetchError] = useState<null | string>(null);
  const navigateTo = useNavigate()

  const onSubmit: SubmitHandler<IFormValues> = data => {

    setDisabled(true);

    imitateFetch(data)
      .then((response) => {

        if (response.status === true) {
          localStorage.setItem('login', response.data.login);
          navigateTo('/profile');
        }
        else setFetchError(response.data.login);
        reset();
        setDisabled(false)
      })
      ;
  };


  return (

    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {fetchError && <ErrorMessage ><span> Пользователя {fetchError}  не существует</span></ErrorMessage>}



      <LabeledInput label='login' type='text' register={register} name="Логин" required valid='1px solid red' />
      {errors.login && <StyledErrorMessage>{errors.login.message}</StyledErrorMessage>}

      <LabeledInput label='password' type='password' register={register} name="Пароль" required valid={'1px solid red'} />
      {errors.password && <StyledErrorMessage>{errors.password.message}</StyledErrorMessage>}

      <Checkbox label='savePassword' register={register} name="Запомнить пароль" valid={'1px solid red'} />
      <Button primary disabled={disabled}>Войти</Button>
    </StyledForm>

  )
}

export default Form