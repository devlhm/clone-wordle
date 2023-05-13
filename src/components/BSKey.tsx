import { StyledSpecialKey } from "./styles/SpecialKey.styled"
import {ReactComponent as BSIcon} from "../assets/bs-icon.svg";
import { useTheme } from "styled-components";

const BSKey = (props: {onClick: (param: any) => void}) => {
    const theme = useTheme();

    return (
        <StyledSpecialKey onClick={props.onClick}>
            <BSIcon fill={theme.text} />
        </StyledSpecialKey>
    )
}

export default BSKey