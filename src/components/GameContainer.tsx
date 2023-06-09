import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Keyboard } from "./Keyboard";
import LetterGrid from "./LetterGrid";
import {
	GameContext,
	GameState,
	defaultBoardMatrix,
} from "../contexts/GameContext";
import { StyledToast } from "./styles/Toast.styled";
import { usePersistedState } from "../hooks/usePersistedState";
import getFromLocalStorage from "../utils/getFromLocalStorage";
import { generateWordSet } from "../utils/wordSet";

const KeyboardMemo = memo(Keyboard);
const rowLength = 5;

const GameContainer = () => {
	const [accessDate, setAccessDate] = usePersistedState(
		new Date(),
		"ACCESS_DATE"
	);
	const [wordSet, setWordSet] = useState(new Set() as Set<string>);
	const [word, setWord] = usePersistedState("", "WORD");

	const [boardMatrix, setBoardMatrix] = usePersistedState(
		defaultBoardMatrix,
		"BOARD_MATRIX"
	);
	const currLetterPos = useRef(
		getFromLocalStorage("CURR_LETTER_POS", 0 as number)
	);
	const [gameState, setGameState] = usePersistedState(
		GameState.PLAYING,
		"GAME_STATE"
	);
	const [currRow, setCurrRow] = usePersistedState(0, "CURR_ROW");
	const disabledKeys = useRef(
		getFromLocalStorage("DISABLED_KEYS", [] as string[])
	);

	const attempts = useRef(getFromLocalStorage("ATTEMPTS", 0 as number));

	const addLetter = useCallback(
		(letter: string) => {
			setBoardMatrix((boardMatrix) => {
				const newBoard = [...boardMatrix];
				newBoard[currRow][currLetterPos.current] = letter.toUpperCase();

				currLetterPos.current++;
				localStorage.setItem(
					"CURR_LETTER_POS",
					JSON.stringify(currLetterPos.current)
				);

				return newBoard;
			});
		},
		[currRow, setBoardMatrix]
	);

	const deleteLastLetter = useCallback(() => {
		setBoardMatrix((boardMatrix) => {
			const newBoard = [...boardMatrix];
			currLetterPos.current = Math.max(currLetterPos.current - 1, 0);
			localStorage.setItem(
				"CURR_LETTER_POS",
				JSON.stringify(currLetterPos.current)
			);

			newBoard[currRow][currLetterPos.current] = "";

			return newBoard;
		});
	}, [currRow, setBoardMatrix]);

	const submitAttempt = useCallback(() => {
		attempts.current++;
		localStorage.setItem("ATTEMPTS", JSON.stringify(attempts.current));
		const attemptedWord = boardMatrix[currRow].join("");

		if (!wordSet.has(attemptedWord.toLowerCase())) return;

		if (attemptedWord === word) setGameState(GameState.WON);
		else if (currRow >= 5) setGameState(GameState.LOST);
		else {
			setCurrRow((currRow) => Math.min(currRow + 1, 5));
			currLetterPos.current = 0;
			localStorage.setItem(
				"CURR_LETTER_POS",
				JSON.stringify(currLetterPos.current)
			);
		}
	}, [boardMatrix, currRow, setCurrRow, setGameState, word, wordSet]);

	const handleInput = useCallback(
		(key: string) => {
			if (gameState !== GameState.PLAYING) return;

			if (/^[A-Za-z]$/.test(key) && currLetterPos.current < rowLength)
				addLetter(key);
			else if (key === "Backspace" && currLetterPos.current >= 0)
				deleteLastLetter();
			else if (key === "Enter" && currLetterPos.current === rowLength)
				submitAttempt();
		},
		[addLetter, deleteLastLetter, submitAttempt, gameState]
	);

	const getWinMessage = () => {
		switch (attempts.current) {
			case 1:
				return "Bonkers!";
			case 2:
				return "Poggers";
			case 3:
				return "Nice";
			case 4:
				return "Okay";
			case 5:
				return "Daaaamn";
			case 6:
				return "Oof";
		}
	};

	useEffect(() => {
		const onKeyUp = (e: globalThis.KeyboardEvent) => handleInput(e.key);

		document.addEventListener("keyup", onKeyUp);

		return () => document.removeEventListener("keyup", onKeyUp);
	}, [handleInput]);

	useEffect(() => {
		localStorage.setItem("BOARD_MATRIX", JSON.stringify(boardMatrix));
	}, [boardMatrix]);

	useEffect(() => {
		const set = generateWordSet();
		setWordSet(set.wordSet);
		const now = new Date();

		if (
			accessDate.getDate < now.getDate ||
			accessDate.getMonth < now.getMonth ||
			accessDate.getFullYear < now.getFullYear
		) {
			setBoardMatrix(defaultBoardMatrix);
			setCurrRow(0);
			currLetterPos.current = 0;
			setGameState(GameState.PLAYING);
			disabledKeys.current = [];
			attempts.current = 0;
			setWord("");
		}

		setWord((word) => (word === "" ? set.todayWord.toUpperCase() : word));
	}, [accessDate, setBoardMatrix, setCurrRow, setGameState, setWord]);

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
				gameState,
				disabledKeys,
				attempts,
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<StyledToast
					className={gameState === GameState.WON ? "show" : ""}
				>
					{getWinMessage()}
				</StyledToast>
				<StyledToast
					className={gameState === GameState.LOST ? "show" : ""}
				>
					{word}
				</StyledToast>
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
