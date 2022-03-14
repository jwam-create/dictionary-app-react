import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<header>
					<h1>Dictionary</h1>
					<h3 className="mb-4">What word do you want to look up?</h3>
				</header>
				<Dictionary />
				<footer className="opacity-75">
					Coded by Jenna Wamsley and open sourced on{" "}
					<a
						href="https://github.com/jwam-create/dictionary-app-react"
						target="_blank"
					>
						github
					</a>
					.
				</footer>
			</div>
		</div>
	);
}
