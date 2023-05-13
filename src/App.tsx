import Header from "./components/Header";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
import GameContainer from "./components/GameContainer";

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<div className="App">
				<Header />
				<GameContainer />
			</div>
		</ThemeProvider>
	);
}

export default App;
