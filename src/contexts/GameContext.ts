import { MutableRefObject, createContext } from "react";

export enum GameState {
	PLAYING, WON, LOST
}

interface GameContextObj {
	boardMatrix: string[][];
	addLetter: (key: string) => void;
	deleteLastLetter: () => void;
	nextRow: () => void;
	currLetterPos: MutableRefObject<number>;
	currRow: number;
	rowLength: number;
	handleInput: (key: string) => void;
	word: string;
	gameState: GameState;
	disabledKeys: MutableRefObject<string[]>;
	attempts: MutableRefObject<number>;
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
