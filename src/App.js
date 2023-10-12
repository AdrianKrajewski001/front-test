import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
	// use class "'dark-mode' to change theme"

	const isDarkMode = useSelector((state) => state.theme.isDarkMode);

	return (
		<div className={isDarkMode ? "dark-mode" : null}>
			<Header />
			<List />
		</div>
	);
}

export default App;
