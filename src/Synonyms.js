import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
	if (props.synonyms.length) {
		return (
			<ul className="Synonyms">
				<strong>Synonyms: </strong>
				{props.synonyms.map(function (synonym, index) {
					return (
						<li key={index}>
							<em> {synonym} </em>
						</li>
					);
				})}
			</ul>
		);
	} else {
		return null;
	}
}
