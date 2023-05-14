import { useContext } from "react";
import { StyledLetterCell } from "./styles/LetterCell.styled";
import { GameContext, GameState } from "../contexts/GameContext";

type LetterCellProps = {
	rowId: number;
	letterPos: number;
};

const LetterCell = (props: LetterCellProps) => {
	const { boardMatrix, word, currRow, gameState, disabledKeys } =
		useContext(GameContext);

	const letter = boardMatrix[props.rowId][props.letterPos];
	let className;
	let delayAnimation = false;

	if (letter) {
		if (currRow > props.rowId || gameState !== GameState.PLAYING) {
			delayAnimation = true;
				
			if (letter === word.charAt(props.letterPos)) {
				className = "correct";
			} else {
				let letterOcurrencesInRow = 0;
				let letterOcurrencesInWord = 0;
				let correctOccurrencesInRow = 0;

				boardMatrix[props.rowId]
					.slice(0, props.letterPos)
					.forEach((elem) => {
						if (elem === letter) letterOcurrencesInRow++;
					});

				word.split("").forEach((elem) => {
					if (elem === letter) letterOcurrencesInWord++;
				});

				boardMatrix[props.rowId].forEach((elem, index) => {
					if (word.charAt(index) === elem && elem === letter)
						correctOccurrencesInRow++;
				});

				if (
					word.includes(letter) &&
					letterOcurrencesInRow < letterOcurrencesInWord &&
					correctOccurrencesInRow < letterOcurrencesInWord
				)
					className = "almost";
				else {
					className = "wrong";
					disabledKeys.current.push(letter);
				}
			}
		} else {
			className = "filled";
		}
	}

	return (
		<StyledLetterCell
			className={className}
			style={
				delayAnimation
					? { animationDelay: `${400 * props.letterPos}ms` }
					: {}
			}
		>
			{letter}
		</StyledLetterCell>
	);
};

export default LetterCell;
