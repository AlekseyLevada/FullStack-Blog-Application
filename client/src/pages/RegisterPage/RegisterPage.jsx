import {StyledRegisterPage} from './styles/styledRegisterPage';
import {StyledAuthForm} from "./styles/styledAuthForm";
import {StyledButtonsBlock} from "./styles/styledButtonsBlock";
import {Link} from "react-router-dom";

export const RegisterPage = () => {
    return(
        <StyledRegisterPage>
            <StyledAuthForm onSubmit={(e) => e.preventDefault()}>
                <h2>
                    Регистрация
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
                        Подтвердить
                    </button>
                    <Link to='/login'>
                        Есть аккаунт?
                    </Link>
                </StyledButtonsBlock>
            </StyledAuthForm>
        </StyledRegisterPage>
    )
}