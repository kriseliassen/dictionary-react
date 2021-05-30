import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div>
			<main className="App">
				<Dictionary />
			</main>
			<footer className="App-footer">
				<a href="https://github.com/kriseliassen/dictionary-react">
					Open-source{" "}
				</a>
				by
				<a href="https://awesome-yonath-d91ac7.netlify.app/index.html">
					{" "}
					Kristin Eliassen
				</a>
			</footer>
		</div>
	);
}

export default App;
