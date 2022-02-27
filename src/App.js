import "./App.css";
import Sunset from "./Sunset.PNG";

export default function App() {
	return (
		<div className="App">
			<h1>Hello from Dictionary App</h1>
			<button className="btn btn-primary">Submit</button>
			<br />
			<img src={Sunset} alt="picture of a sunset" />
		</div>
	);
}
