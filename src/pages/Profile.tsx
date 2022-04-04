import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkLocalStorage, clearLocalStorage } from '../actions/localStorage'
import Button from '../components/Button'
import Typography from '../components/Typography'

const Profile = () => {
  const [login, setLogin] = useState<null | string>(null)
  const navigate = useNavigate();

  const handleExitClick = () => {
    clearLocalStorage();
    navigate('/login')
  }

  useEffect(() => {
    const authorized = checkLocalStorage('login');

    if (!authorized) navigate('/login');
    else setLogin(authorized)
  }, [])

  return (
    <>
      <Typography>Здравствуйте, {login} </Typography>
      <Button secondary onClick={handleExitClick}>Выйти</Button>
    </>
  )
}

export default Profile