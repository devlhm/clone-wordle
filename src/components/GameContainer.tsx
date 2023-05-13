import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Keyboard } from "./Keyboard";
import LetterGrid from "./LetterGrid";
import { GameContext, defaultBoardMatrix } from "../contexts/GameContext";

const KeyboardMemo = memo(Keyboard);
const rowLength = 5;
const word = "LUISO";

const GameContainer = () => {
	const [boardMatrix, setBoardMatrix] = useState(defaultBoardMatrix);
	const currLetterPos = useRef(0);
	const [won, setWon] = useState(false);
	const [currRow, setCurrRow] = useState(0);

	const addLetter = useCallback(
		(letter: string) => {
			setBoardMatrix((boardMatrix) => {
				const newBoard = [...boardMatrix];
				newBoard[currRow][currLetterPos.current] = letter.toUpperCase();

				currLetterPos.current++;

				return newBoard;
			});
		},
		[currRow]
	);

	const deleteLastLetter = useCallback(() => {
		setBoardMatrix((boardMatrix) => {
			const newBoard = [...boardMatrix];
			currLetterPos.current = Math.max(currLetterPos.current - 1, 0);
			newBoard[currRow][currLetterPos.current] = "";

			return newBoard;
		});
	}, [currRow]);

	const submitAttempt = useCallback(() => {
		const attemptedWord = boardMatrix[currRow].join("");
		console.log(attemptedWord);
		if (attemptedWord === word) {
			console.log("you win");
			setWon(true);
		} else {
			setCurrRow((currRow) => Math.min(currRow + 1, 5));
			currLetterPos.current = 0;
		}
	}, [boardMatrix, currRow]);

	const handleInput = useCallback(
		(key: string) => {
			if(!won) {
				console.log(key);
				if (/^[A-Za-z]$/.test(key) && currLetterPos.current < rowLength)
				addLetter(key);
				else if (key === "Backspace" && currLetterPos.current >= 0)
					deleteLastLetter();
				else if (key === "Enter" && currLetterPos.current === rowLength)
					submitAttempt();
			}
		},
		[addLetter, deleteLastLetter, submitAttempt, won]
	);

	useEffect(() => {
		const onKeyUp = (e: globalThis.KeyboardEvent) => handleInput(e.key);

		document.addEventListener("keyup", onKeyUp);

		return () => document.removeEventListener("keyup", onKeyUp);
	}, [handleInput]);

	return (
		<GameContext.Provider
			value={{
				boardMatrix,
				addLetter,
				deleteLastLetter,
				nextRow: submitAttempt,
				currLetterPos,
				currRow,
				rowLength,
				handleInput,
				word,
				won
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<LetterGrid />
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-end",
				}}
			>
				<KeyboardMemo />
			</div>
		</GameContext.Provider>
	);
};

export default GameContainer;
