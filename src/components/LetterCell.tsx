import { useContext } from "react";
import { StyledLetterCell } from "./styles/LetterCell.styled";
import { GameContext } from "../contexts/GameContext";

type LetterCellProps = {
	rowId: number;
	letterPos: number;
};

const LetterCell = (props: LetterCellProps) => {
	const { boardMatrix, word, currRow, won } = useContext(GameContext);

	const letter = boardMatrix[props.rowId][props.letterPos];
	let className = "";

	
	if (letter && (currRow > props.rowId || won)) {
		if (letter === word.charAt(props.letterPos)) className = "correct";
		else if (word.includes(letter)) className = "almost";
		else className = "wrong";
	}

	return <StyledLetterCell className={className}>{letter}</StyledLetterCell>;
};

export default LetterCell;
