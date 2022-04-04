import React, { useState } from 'react';
import styled from 'styled-components';
import FlexWrapper from './components/FlexWrapper';

import Header from './components/Header';
import { Routes, Route, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { RedirectToLogin } from './pages/RedirectToLogin';
import FlexItem from './components/FlexItem';

const AppWrapper = styled.div`
  width:100%;
  height:100vh;
  padding:2.5rem;

`

const App = () => {





  return (

    <AppWrapper >
      <Header />

      <FlexWrapper direction='column' justify='center' align='center' fullheight>
        <Routes>
          <Route path="/" element={RedirectToLogin} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={RedirectToLogin} />
        </Routes >
      </FlexWrapper>

    </AppWrapper >

  );
}

export default App;


