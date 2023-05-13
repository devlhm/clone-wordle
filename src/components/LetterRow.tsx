import LetterCell from "./LetterCell";
import { StyledLetterRow } from "./styles/LetterRow.styled";

type LetterRowProps = {
	rowId: number;
};

const LetterRow = (props: LetterRowProps) => {
	const cells = 5;
    const letterCells = [];

	for(let i = 0; i < cells; i++) {
		letterCells.push(<LetterCell rowId={props.rowId} letterPos={i} key={i}/>)
	}

	return (
		<StyledLetterRow>
			{letterCells}
		</StyledLetterRow>
	);
};

export default LetterRow;
