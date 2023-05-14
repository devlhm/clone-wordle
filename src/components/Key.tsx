import { useContext } from "react";
import BSKey from "./BSKey";
import EnterKey from "./EnterKey";
import { StyledKey } from "./styles/Key.styled"
import { GameContext } from "../contexts/GameContext";


type KeyProps = {
    letter: string,
}

const Key = (props: KeyProps) => {
    const {handleInput, disabledKeys} = useContext(GameContext);

    switch(props.letter) {
        case "Enter":
            return <EnterKey onClick={() => handleInput(props.letter)}/>
        case "Backspace":
            return <BSKey onClick={() => handleInput(props.letter)}/>
        default:
            return <StyledKey disabled={disabledKeys.current.includes(props.letter)} onClick={() => handleInput(props.letter)}>{props.letter}</StyledKey>
    }
}

export default Key;