import Key from "./Key";
import { StyledKeyRow } from "./styles/KeyRow.styled";

type KeyRowProps = {
	letters: string[];
};

const KeyRow = (props: KeyRowProps) => {
	const letters = props.letters;
	const keys: JSX.Element[] = [];

	letters.forEach((letter) => {
		keys.push(
			<Key
				letter={letter}
			/>
		);
	});

	return <StyledKeyRow>{keys}</StyledKeyRow>;
};

export default KeyRow;
