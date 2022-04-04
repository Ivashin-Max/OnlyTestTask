import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkLocalStorage } from '../actions/localStorage'
import Button from '../components/Button'
import Typography from '../components/Typography'

const Profile = () => {
  const [login, setLogin] = useState('')
  const navigate = useNavigate();

  const handleExitClick = () => {
    localStorage.clear();
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