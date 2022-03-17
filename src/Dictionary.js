import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
	const [value, setValue] = useState(props.defaultKeyword);
	const [data, setData] = useState(null);
	const [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setData(response.data[0]);
	}

	function search() {
		// documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleSearchInput(event) {
		setValue(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<form className="d-inline-flex" onSubmit={handleSubmit}>
						<input
							type="search"
							placeholder="Type a word"
							autoFocus={true}
							className="form-control"
							onChange={handleSearchInput}
						/>
					</form>
					<p className="hint">Suggestions: sunset, cat, yoga, forest...</p>
				</section>
				<Results results={data} />
			</div>
		);
	} else {
		load();
		return null;
	}
}
