import { MutableRefObject, createContext } from "react";

interface GameContextObj {
	boardMatrix: string[][];
	addLetter: (key: string) => void;
	deleteLastLetter: () => void;
	nextRow: () => void;
	currLetterPos: MutableRefObject<number>;
	currRow: number;
	rowLength: number;
	handleInput: (key: string) => void;
	word: string,
	won: boolean
}

export const defaultBoardMatrix = [
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
	["", "", "", "", ""],
];

export const GameContext = createContext({} as GameContextObj);
