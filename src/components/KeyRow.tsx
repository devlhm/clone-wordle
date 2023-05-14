import Key from "./Key";
import { StyledKeyRow } from "./styles/KeyRow.styled";

type KeyRowProps = {
	letters: string[];
	rowId: number;
};

const KeyRow = (props: KeyRowProps) => {
	const letters = props.letters;

	return (
		<StyledKeyRow>
			{letters.map((letter, index) => (
				<Key letter={letter} key={index} />
			))}
		</StyledKeyRow>
	);
};

export default KeyRow;
