import React from 'react';
import styled from 'styled-components';
import FlexWrapper from './components/FlexWrapper';
import { fetch } from './actions/fetchImitation'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { RedirectToLogin } from './pages/RedirectToLogin';

const AppWrapper = styled.div`
  width:100%;
  min-height:100vh;
  padding:1rem;
`




const App = () => {
  return (

    <AppWrapper >
      <FlexWrapper justify='center' direction='column' align='center'>
        <Header />
        <Routes>
          <Route path="/" element={RedirectToLogin} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={RedirectToLogin} />
        </Routes >
        <button onClick={() => console.log(fetch({ login: '1', password: '2' }))}>+</button>
      </FlexWrapper>
    </AppWrapper >
  );
}

export default App;
