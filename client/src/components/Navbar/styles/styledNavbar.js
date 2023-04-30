import styled from 'styled-components';

export const StyledNavbar = styled.nav`
padding: 0 20px;
transition: .3s ease-in-out;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1440px;
min-height: 50px;
margin: 0 auto;
  a{
    font-size: 16px;
    color: #000;
    font-weight: 500;
    &:hover {
      color: #fff;
      transition: .3s ease-in-out;
    }
  }
`