import styled from "styled-components";

export const StyledToast = styled.div`
    --transition-duration: 1s;
    --transition-delay: 1s;
    width: 100px;
    height: 50px;
    position: absolute;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-weight: 500;
    transition: top var(--transition-duration) ease-out;
    transition-delay: var(--transition-delay);
    top: -100px;
    z-index: 10;
        
    &.show {
        top: 4.5em;
        animation: disappear forwards 400ms ease-out;
        animation-delay: calc(var(--transition-duration) + var(--transition-delay) + 1s);
    }

    @keyframes disappear {
        100% {
            opacity: 0;
        }
    }
`