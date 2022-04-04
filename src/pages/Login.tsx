import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkLocalStorage } from '../actions/localStorage';
import Form from '../components/Form'

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authorized = checkLocalStorage('login');
    if (authorized) navigate('/profile');
  }, [])

  return (
    <Form />
  )
}

export default Login