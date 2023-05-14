import { StyledSpecialKey } from "./styles/SpecialKey.styled";

const EnterKey = (props: {
	onClick: (param: any) => void;
}) => {
	return (
		<StyledSpecialKey onClick={props.onClick}>
			ENTER
		</StyledSpecialKey>
	);
};

export default EnterKey;
