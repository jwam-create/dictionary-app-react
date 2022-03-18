import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
	const [value, setValue] = useState(props.defaultKeyword);
	const [data, setData] = useState(null);
	const [photos, setPhotos] = useState(null);
	const [loaded, setLoaded] = useState(false);

	function handleDictionaryApiResponse(response) {
		setData(response.data[0]);
	}
	function handlePhotosApiResponse(response) {
		console.log(response);
	}

	function search() {
		// dictionary API documentation: https://dictionaryapi.dev/
		let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
		axios.get(dictionaryApiUrl).then(handleDictionaryApiResponse);

		// photo API documentation: https://www.pexels.com/api/documentation/?language=javascript#introduction
		let photosApiKey =
			"563492ad6f91700001000001145e4acae76b4c1b81dfebbb98057bfa";
		let photosApiUrl = `https://api.pexels.com/v1/search?query=${value}&per_page=1`;
		let headers = { Authorization: `Bearer ${photosApiKey}` };
		axios.get(photosApiUrl, { headers: headers }).then(handlePhotosApiResponse);
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
					<h2>What word do you want to look up?</h2>
					<form className="d-inline-flex" onSubmit={handleSubmit}>
						<input
							type="search"
							placeholder="Type a word"
							autoFocus={true}
							className="form-control"
							onChange={handleSearchInput}
							defaultValue={props.defaultKeyword}
						/>
					</form>
					<p className="hint">Suggestions: sunset, cat, yoga, forest...</p>
				</section>
				<Results results={data} />
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return null;
	}
}
