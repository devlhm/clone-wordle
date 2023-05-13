import LetterRow from "./LetterRow";
import { StyledLetterGrid } from "./styles/LetterGrid.styled";

const LetterGrid = () => {
	const rows = 6;
	const letterRows = [];

	for (let i = 0; i < rows; i++) {
		letterRows.push(<LetterRow key={i} rowId={i} />);
	}

	return <StyledLetterGrid>{letterRows}</StyledLetterGrid>;
};

export default LetterGrid;
