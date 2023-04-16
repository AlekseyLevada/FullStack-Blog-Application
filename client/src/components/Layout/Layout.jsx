import {StyledLayout} from "./styles/styledLayout";
import {Navbar} from '../Navbar/Navbar';

export const Layout = ({children}) => {
    return(
        <StyledLayout>
            <Navbar/>
            {children}
        </StyledLayout>
    )
}