import styled from "styled-components";

export const StyledAuthForm = styled.form`
  text-shadow: 1px 1px 3px #000;
display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  min-width: 300px;
  h2 {
    color: #c9c9c9;
    text-align: center;
  }
  label {
    color: #c9c9c9;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    padding: 5px;
    font-size: 14px;
    height: 30px;
    border: none;
    border-radius: 5px;
  }
  button {
    cursor: pointer;
    width: 100px;
    height: 30px;
    padding: 5px;
    border: none;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
  }
  a {
    font-size: 14px;
    color: #c9c9c9;
    transition: .3s ease-in-out;
    &:hover {
      color: #000;
      transition: .3s ease-in-out;
    }
  }
`