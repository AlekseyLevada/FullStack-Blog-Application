import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/thunks/registerUser";
import { StyledRegisterPage } from "./styles/styledRegisterPage";
import { StyledAuthForm } from "./styles/styledAuthForm";
import { StyledButtonsBlock } from "./styles/styledButtonsBlock";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const getRegisterInfo = () => {
    try {
      dispatch(registerUser({ username, password }));
      setUsername("");
      setPassword("");
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledRegisterPage onSubmit={(e) => e.preventDefault()}>
      <StyledAuthForm>
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
          <button type={"submit"} onClick={() => getRegisterInfo()}>
            Подтвердить
          </button>
          <Link to="/login">Есть аккаунт?</Link>
        </StyledButtonsBlock>
      </StyledAuthForm>
    </StyledRegisterPage>
  );
};
