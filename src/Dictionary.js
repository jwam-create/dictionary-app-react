import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
	const [value, setValue] = useState(null);
	const [data, setData] = useState(null);

	function handleResponse(response) {
		setData(response.data[0]);
	}

	function search(event) {
		event.preventDefault();

		// documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleSearchInput(event) {
		setValue(event.target.value);
	}

	return (
		<div className="Dictionary">
			<section>
				<form className="d-inline-flex" onSubmit={search}>
					<input
						type="search"
						placeholder="Search for a word"
						autoFocus={true}
						className="form-control"
						onChange={handleSearchInput}
					/>
				</form>
			</section>
			<Results results={data} />
		</div>
	);
}
