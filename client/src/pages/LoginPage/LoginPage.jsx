import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../store/thunks/loginUser";
import {StyledLoginPage} from './styles/styledLoginPage';
import {StyledAuthForm} from "./styles/styledAuthForm";
import {StyledButtonsBlock} from "./styles/styledButtonsBlock";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {message} = useSelector(state => state.auth)

    const getLoginInfo = async () => {
        try {
            await dispatch(loginUser({username, password}))
            toast(message)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

    }, [message])

    return(
        <StyledLoginPage>
            <StyledAuthForm onSubmit={(e) => e.preventDefault()}>
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