import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/thunks/registerUser";
import { StyledRegisterPage } from "./styles/styledRegisterPage";
import { StyledAuthForm } from "./styles/styledAuthForm";
import { StyledButtonsBlock } from "./styles/styledButtonsBlock";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';

export const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {message} = useSelector(state => state.auth)

  const getRegisterInfo = async () => {
    try {
      await dispatch(registerUser({ username, password }));
      setUsername('')
      setPassword('')
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if(message){
      toast(message)
    }
  },[message])

  return (
    <StyledRegisterPage>
      <StyledAuthForm onSubmit={(e) => e.preventDefault()}>
        <h2>Регистрация</h2>
        <label>
          Username:
          <input
              placeholder={"Username"}
              name={"username"}
              type={"text"}
              onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
              placeholder={"Password"}
              name={"password"}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <StyledButtonsBlock>
          <button type={"submit"}
                  onClick={() => getRegisterInfo()}>
            Подтвердить
          </button>
          <Link to="/login">Есть аккаунт?</Link>
        </StyledButtonsBlock>
      </StyledAuthForm>
    </StyledRegisterPage>
  );
};
