import React from "react";
import {Link} from 'react-router-dom';
import {StyledMainPage} from "./styles/styledMainPage";

export const MainPage = () => {
    return(
        <StyledMainPage>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"20px"}}>
                <h1>
                    Добро пожаловать в приложение
                </h1>
                <Link to={'/login'}>
                    <button>
                        Войти
                    </button>
                </Link>
            </div>
        </StyledMainPage>
    )
}