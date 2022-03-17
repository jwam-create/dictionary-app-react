import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<header>
					<h1>Dictionary</h1>
				</header>
				<Dictionary defaultKeyword="forest" />
				<footer className="opacity-75">
					Coded by Jenna Wamsley and open sourced on{" "}
					<a
						href="https://github.com/jwam-create/dictionary-app-react"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</a>
					.
				</footer>
			</div>
		</div>
	);
}
