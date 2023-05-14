import styled from "styled-components";

export const StyledLetterCell = styled.div`
	border: 2px solid #3a3a3c;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.8em;
	height: 1.8em;
	margin: 2px;
	font-size: 2em;
	font-weight: bolder;

	@keyframes turn {
		0% {
			transform: rotate(0);
		}

		50% {
			transform: rotateX(90deg);
		}
	}

	@keyframes grow {
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(1.05);
		}

		100% {
			transform: scale(1);
		}
	}

	@keyframes color-correct {
		0% {
			background-color: transparent;
            border-color: #565758;
		}

		50% {
            border-color: transparent;
			background-color: ${({ theme }) => theme.letterCollors.correct};
		}

        100% {
            border-color: transparent;
			background-color: ${({ theme }) => theme.letterCollors.correct};
		}
	}

    @keyframes color-wrong {
		0% {
			background-color: transparent;
            border-color: #565758;
		}

		50% {
            border-color: transparent;
			background-color: ${({ theme }) => theme.letterCollors.wrong};
		}

        100% {
            border-color: transparent;
			background-color: ${({ theme }) => theme.letterCollors.wrong};
		}
	}

    @keyframes color-almost {
		0% {
			background-color: transparent;
            border-color: #565758;
		}

		50% {
            border-color: transparent;
			background-color: ${({ theme }) => theme.letterCollors.almost};
		}
        
        100% {
            border-color: transparent;
			background-color: ${({ theme }) => theme.letterCollors.almost};
		}
	}

	&.filled {
		border-color: #565758;
		animation-name: grow;
		animation-duration: 0.1s;
		animation-iteration-count: 1;
		animation-timing-function: ease-out;
	}

	&.correct,
	&.wrong,
	&.almost {
		border-color: transparent;
		animation-duration: 0.8s;
		animation-iteration-count: 1;
	}

	&.correct {
		animation: turn ease, color-correct step-end both;
        animation-duration: 0.8s;
		animation-iteration-count: 1;
        
	}

	&.wrong {
		animation: turn ease, color-wrong step-end both;
        animation-duration: 0.8s;
		animation-iteration-count: 1;
	}

	&.almost {
		animation: turn ease, color-almost step-end both;
        animation-duration: 0.8s;
		animation-iteration-count: 1;
		background-color: ${({ theme }) => theme.letterCollors.almost};
	}
`;
