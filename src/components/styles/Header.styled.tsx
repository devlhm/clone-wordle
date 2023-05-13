import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 98vw;
    height: 70px;
    padding: 0 1vw;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.header.borderBottom};
`