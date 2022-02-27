import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
	const [value, setValue] = useState(null);

	function handleSubmit(event) {
		event.preventDefault();
	}
	function search(event) {}

	return (
		<div className="Dictionary">
			<form className="d-inline-flex" onSubmit={handleSubmit}>
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
