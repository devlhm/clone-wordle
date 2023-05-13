import styled from "styled-components";

export const StyledLetterCell = styled.div`
    border: 2px solid ${({theme}) => theme.header.borderBottom};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.8em;
    height: 1.8em;
    margin: 2px;
    font-size: 2em;
    font-weight: bolder;

    &.correct {
        background-color: ${({theme}) => theme.letterCollors.correct};
    }

    &.wrong {
        background-color: ${({theme}) => theme.letterCollors.wrong};
    }

    &.almost {
        background-color: ${({theme}) => theme.letterCollors.almost};
    }
`