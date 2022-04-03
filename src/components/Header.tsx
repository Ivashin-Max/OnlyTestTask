import React from 'react'
import Title from './Title'
import styled from 'styled-components';

const StyledHeader = styled.header`

`


const Header = () => {
  return (
    <StyledHeader>
      <Title textTransform='uppercase'>only.</Title>
    </StyledHeader >

  )
}

export default Header