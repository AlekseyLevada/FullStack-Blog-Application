import {StyledNavbar} from "./styles/styledNavbar";
import {StyledButton} from "./styles/styledButton";
import {StyledLogo} from "./styles/styledLogo";
import {StyledMenu} from "./styles/styledMenu";
import {Link} from "react-router-dom";
import Logo from '../../images/logo-img/logo.svg';
import {useSelector} from "react-redux";
import {checkIsAuth} from "../../store/features/auth/authSlice";

export const Navbar = () => {

    const isAuth = useSelector(checkIsAuth)

    return(
        <StyledNavbar>
            <StyledLogo>
                <img src={Logo} alt={"logotype"}/>
            </StyledLogo>

            {
                isAuth ? <StyledMenu>
                    <li>
                        <Link to={'/'}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link to={'/posts'}>
                            Мои посты
                        </Link>
                    </li>
                    <li>
                        <Link to={'/new'}>
                            Добавить пост
                        </Link>
                    </li>
                </StyledMenu> : null
            }

            {
                isAuth ? (
                    <StyledButton>
                        <button>
                            Выйти
                        </button>
                    </StyledButton>)
                    : (
                        <Link to={'/login'}>
                        <StyledButton>
                            <button>Войти</button>
                        </StyledButton>
                        </Link>
                    )
            }
        </StyledNavbar>
    )
}