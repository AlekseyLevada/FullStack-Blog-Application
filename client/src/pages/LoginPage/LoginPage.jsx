import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/thunks/loginUser";
import {StyledLoginPage} from './styles/styledLoginPage';
import {StyledAuthForm} from "./styles/styledAuthForm";
import {StyledButtonsBlock} from "./styles/styledButtonsBlock";
import {Link, useNavigate} from "react-router-dom";

export const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getLoginInfo = async () => {
        await dispatch(loginUser({username, password}))
    }

    return(
        <StyledLoginPage>
            <StyledAuthForm>
                <h2>
                    Авторизация
                </h2>
                <label>
                    Username:
                    <input
                        placeholder={'Username'}
                        name={'username'}
                        type={'text'}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        placeholder={'Password'}
                        name={'password'}
                        type={'password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <StyledButtonsBlock>
                    <button type={'submit'} onClick={() => getLoginInfo()}>
                        Войти
                    </button>
                    <Link to='/register'>
                        Нет аккаунта?
                    </Link>
                </StyledButtonsBlock>
            </StyledAuthForm>
        </StyledLoginPage>
    )
}