import React from 'react'
import Title from './Title'
import styled from 'styled-components';

const StyledHeader = styled.header`
position:fixed;
width: 100%;
top:2.5rem;
left:0;
`


const Header = () => {
  return (
    <StyledHeader>
      <Title textTransform='uppercase'>only.</Title>
    </StyledHeader >

  )
}

export default Header