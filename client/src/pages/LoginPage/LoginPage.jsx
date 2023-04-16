import {StyledLoginPage} from './styles/styledLoginPage';
import {StyledAuthForm} from "./styles/styledAuthForm";
import {StyledButtonsBlock} from "./styles/styledButtonsBlock";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    return(
        <StyledLoginPage>
            <StyledAuthForm onSubmit={(e) => e.preventDefault()}>
                <h2>
                    Авторизация
                </h2>
                <label>
                    Username:
                    <input placeholder={'Username'} name={'username'} type={'text'}/>
                </label>
                <label>
                    Password:
                    <input placeholder={'Password'} name={'password'} type={'password'}/>
                </label>
                <StyledButtonsBlock>
                    <button type={'submit'}>
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