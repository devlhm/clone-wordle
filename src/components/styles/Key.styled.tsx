import styled from "styled-components";

export const StyledKey = styled.button`
    --key-width: 2.3em;
    border: none;
    background-color: #818384;
    border-radius: 5px;
    min-width: var(--key-width);
    min-height: calc(var(--key-width)*2.7/2);
    margin: 3px;
    box-shadow: none;
    color: ${({theme}) => theme.text};
    font-weight: bolder;
    font-size: 1.2em;
    cursor: pointer;
`