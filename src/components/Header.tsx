import { StyledHeader } from "./styles/Header.styled";
import {ReactComponent as HamburgerMenu} from "../assets/hamburger-menu.svg";
import {ReactComponent as QuestionIcon} from "../assets/question-icon.svg"
import {ReactComponent as StatsIcon} from "../assets/stats-icon.svg"
import {ReactComponent as SettingsIcon} from "../assets/settings-icon.svg"

import { StyledHeaderButton } from './styles/HeaderButton.styled';
import { useTheme } from "styled-components";

const Header = () => {
    const theme = useTheme();

    return (
    <StyledHeader>
        <StyledHeaderButton>
            <HamburgerMenu fill={theme.text}/>
        </StyledHeaderButton>

        <h1 style={{textAlign: "center", margin: 0}}>Luisdle</h1>

        <div style={{
            display: "flex",
            justifyContent: "flex-end",
        }}>
            <StyledHeaderButton><QuestionIcon fill={theme.text}></QuestionIcon></StyledHeaderButton>
            <StyledHeaderButton><StatsIcon fill={theme.text}/></StyledHeaderButton>
            <StyledHeaderButton><SettingsIcon fill={theme.text} className=""/></StyledHeaderButton>
        </div>

    </StyledHeader>
    )
}



export default Header;