import KeyRow from "./KeyRow";
import { StyledKeyboard } from "./styles/Keyboard.styled";

export const Keyboard = () => {
	const QWERTY_MATRIX = [
		["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
		["A", "S", "D", "F", "G", "H", "J", "K", "L"],
		["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
	];

	return (
		<StyledKeyboard>
			{QWERTY_MATRIX.map((elem, index) => (
				<KeyRow key={index} rowId={index} letters={elem} />
			))}
		</StyledKeyboard>
	);
};
