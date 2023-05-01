 import React from 'react';
import {StyledWelcomePage} from "./styles/styledWelcomePage";
 import {Link} from "react-router-dom";

export const WelcomePage = () => {
    return(
        <StyledWelcomePage>
            <h1>
                Добро пожаловать в GLOBAL BLOG APP
            </h1>
            <Link to={'/register'}>
                <button>
                    Войти
                </button>
            </Link>
        </StyledWelcomePage>
    )
}