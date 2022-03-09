import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
	const [value, setValue] = useState(null);
	const [data, setData] = useState("");

	function handleResponse(response) {
		setData({
			word: response.data[0].word,
			phonetic: response.data[0].phonetics[0].text,
			noun: response.data[0].meanings[0].definitions[0].definition,
			verb: response.data[0].meanings[1].definitions[0].definition,
		});
		console.log(response.data[0]);
		console.log(response.data[0].word);
	}

	function search(event) {
		event.preventDefault();

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleSearchInput(event) {
		setValue(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form className="d-inline-flex" onSubmit={search}>
				<input
					type="search"
					placeholder="Search for a word"
					autoFocus={true}
					className="form-control"
					onChange={handleSearchInput}
				/>
				<input type="submit" className="btn btn-primary ms-3" value="Search" />
			</form>
		</div>
	);
}
